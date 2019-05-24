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
        userPos: 0
    }

    componentDidMount(){
        Promise.all([PetApiService.getCat(), PetApiService.getDog()])
        .then(arr => this.setState({
            dogs: [arr[1]],
            cats: [arr[0]],
            userPos: Math.floor(Math.random() * 3)
        }))
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

    nextCat() {

    }

    previousDog() {

    }

    previousCat() {

    }

    render(){
        const cats = this.state.cats;
        const dogs = this.state.dogs;
        let catStatus, dogStatus;

        if (this.state.catPos === 0 & this.state.userPos === 0) {
            catStatus = 'Available for Adoption'
        } else if (this.state.catPos === 0) {
            catStatus = `1st in line for adoption, being considered by ${this.state.userPos === 1 ? 'one other ahead of you' : 'two others ahead of you'}`;
        } else {
            catStatus = 'Waiting in line for adoption';
        }
     
        
        if (this.state.dogPos === 0 & this.state.userPos === 0) {
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
                    <Pet pet={cats[this.state.catPos]} status={catStatus} position={this.state.catPos}/>
                    <Pet pet={dogs[this.state.dogPos]} status={dogStatus} position={this.state.dogPos} next={this.nextDog}/>
                </div>
                <Link to={'/'}>Back To Home</Link>
            </section>
        )
    }
}