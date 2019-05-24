import React from 'react';

export default class Pet extends React.Component{


    render (){
        const available = this.props.status === 'Available for Adoption';
        return (
            <section class="pet-area">
                <img src={this.props.pet.imageURL} height="300" width="300" alt="pet for adoption" />
                <p>{this.props.pet.imageDescription}</p>
                <p>Name: {this.props.pet.name}</p>
                <p>Sex: {this.props.pet.sex}</p>
                <p>Age: {this.props.pet.age}</p>
                <p>Breed: {this.props.pet.breed}</p>
                <p>Story: {this.props.pet.story}</p>
                <p>Status: {this.props.status}</p>
                <span>
                    <button disabled={this.props.position === 2}onClick={this.props.next}>See Next</button>
                    <button disabled={this.props.position === 0} onClick={this.props.prev}>See Previous</button>
                    <button disabled={!available}>Adopt</button>
                </span>
            </section>  
        )
    }
}