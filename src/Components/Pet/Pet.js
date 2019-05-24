import React from 'react';


export default class Pet extends React.Component{


    render (){
        return (
            <>
                <img src={this.props.pet.imageURL} height="300" width="300" alt="pet for adoption" />
                <p>{this.props.pet.imageDescription}</p>
                <p>Name: {this.props.pet.name}</p>
                <p>Sex: {this.props.pet.sex}</p>
                <p>Age: {this.props.pet.age}</p>
                <p>Breed: {this.props.pet.breed}</p>
                <p>Story: {this.props.pet.story}</p>
            </>
        )
    }
}