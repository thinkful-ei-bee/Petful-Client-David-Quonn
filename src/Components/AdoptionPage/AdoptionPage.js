import React from 'react';
import { Link } from "react-router-dom";
import PetApiService from "../../Services/PetApiService";
import Pet from "../Pet/Pet";
import './AdoptionPage.css';
export default class AdoptionPage extends React.Component{
    
    state = {
        dogs: [{}],
        cats: [{}],
        dogPos: 0,
        catPos: 0,
        userPos: 0,
        clickedAdoptDog: false,
        clickedAdoptCat: false,
        adopted: false
    }
    nextTurn = () => {
        let adopted = false;
        if (this.state.clickedAdoptCat || this.state.clickedAdoptDog) {
            adopted = true;
        }

        if (!adopted) {
            const newDogs = [...this.state.dogs];
            const newCats = [...this.state.cats];

            newDogs.shift();
            newCats.shift();

            Promise.all([PetApiService.removeCat(), PetApiService.removeDog()]).then (
                () => Promise.all([PetApiService.getCat(), PetApiService.getDog()]).then (
                    arr => {
                       newDogs.push(arr[1]);
                       newCats.push(arr[0]);
                       this.setState({
                          dogs: newDogs,
                          cats: newCats,
                          userPos: (this.state.userPos + 2) % 3,
                          clickedAdoptDog: false,
                          clickedAdoptCat: false
                       })
                    }
                )
            )
        } else {
            this.setState({
                dogPos: 0,
                catPos: 0,
                userPos: 0,
                adopted: true
            });
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => this.nextTurn(), 20000);

        Promise.all([PetApiService.getCat(), PetApiService.getDog()])
        .then(arr => this.setState({
            dogs: [arr[1]],
            cats: [arr[0]],
            userPos: Math.floor(Math.random() * 3)
        }))
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    nextDog = () => {
        if (this.state.dogs[this.state.dogPos + 1]) {
            this.setState({
                dogPos: this.state.dogPos + 1
            });
        } else {
            return PetApiService.removeDog().then(e => {
                PetApiService.getDog().then(dog => {
                    const newArr = [...this.state.dogs];
                    newArr.push(dog);
                    this.setState({
                        dogs: newArr,
                        dogPos: this.state.dogPos + 1
                    });
                });
            });
        }
    }

    nextCat = () => {
        if (this.state.cats[this.state.catPos + 1]) {
            this.setState({
                catPos: this.state.catPos + 1
            });
        } else {
            return PetApiService.removeCat().then(e => {
                PetApiService.getCat().then(cat => {
                    const newArr = [...this.state.cats];
                    newArr.push(cat);
                    this.setState({
                        cats: newArr,
                        catPos: this.state.catPos + 1
                    });
                });
            });
        }
    }

    previousDog = () => {
            this.setState({
                dogPos: this.state.dogPos - 1
            });
    }

    previousCat = () => {
        this.setState({
            catPos: this.state.catPos - 1
        });
    }

    adoptDog = () => {
        this.setState({
            clickedAdoptDog: true
        });
    }

    adoptCat = () => {
        this.setState({
            clickedAdoptCat: true
        })
    }

    render(){

        const cats = this.state.cats;
        const dogs = this.state.dogs;
        let catStatus, dogStatus;

        if (this.state.adopted) {
            return (
                <section>
                    <h1>You have adopted a pet!</h1>
                    <div className="pet-area">
                        {this.state.clickedAdoptCat && <Pet pet={cats[this.state.catPos]} status="You have adopted this pet" position={this.state.catPos} next={this.nextCat} prev={this.previousCat} adopt={this.adoptCat}/>}
                        {this.state.clickedAdoptDog && <Pet pet={dogs[this.state.dogPos]} status="You have adopted this pet" position={this.state.dogPos} next={this.nextDog} prev={this.previousDog} adopt={this.adoptDog}/>}
                    </div>
                </section>
            );
        }

        if (this.state.clickedAdoptCat && this.state.catPos === 0) {
            catStatus = 'You are in the process of adopting this pet';
        } else if (this.state.catPos === 0 & this.state.userPos === 0) {
            catStatus = 'Available for Adoption'
        } else if (this.state.catPos === 0) {
            catStatus = `1st in line for adoption, being considered by ${this.state.userPos === 1 ? 'one other ahead of you' : 'two others ahead of you'}`;
        } else {
            catStatus = 'Waiting in line for adoption';
        }
     
        if (this.state.clickedAdoptDog && this.state.dogPos === 0) {
            dogStatus = 'You are in the process of adopting this pet'
        } else if (this.state.dogPos === 0 & this.state.userPos === 0) {
            dogStatus = 'Available for Adoption'
        } else if (this.state.dogPos === 0) {
            dogStatus = `1st in line for adoption, being considered by ${this.state.userPos === 1 ? 'one other ahead of you' : 'two others ahead of you'}`;
        } else {
            dogStatus = 'Waiting in line for adoption';
        }
        return(
            <section>
                <h1>Adoption Page</h1>
                <div className="pet-area">
                    <Pet pet={cats[this.state.catPos]} status={catStatus} position={this.state.catPos} next={this.nextCat} prev={this.previousCat} adopt={this.adoptCat}/>
                    <Pet pet={dogs[this.state.dogPos]} status={dogStatus} position={this.state.dogPos} next={this.nextDog} prev={this.previousDog} adopt={this.adoptDog}/>
                </div>
                <Link to={'/'}>Back To Home</Link>
            </section>
        )
    }
}