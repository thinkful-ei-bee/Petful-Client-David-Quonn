import React from 'react';
import { Link } from "react-router-dom";
import PetApiService from "../../Services/PetApiService";
import Pet from "../Pet/Pet";
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
        .then(arr => this.setState({dogs: [arr[1]], cats: [arr[0]]}))
    }

    render(){
        const cats = this.state.cats;
        const dogs = this.state.dogs;

        return(
            <section>
                <h1>Adoption Page</h1>
                    <Pet pet={cats[0]} />
                    <Pet pet={dogs[0]} />
                <Link to={'/'}>Back To Home</Link>
            </section>
        )
    }
}