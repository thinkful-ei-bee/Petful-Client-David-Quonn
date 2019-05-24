import React from 'react';


export default class Pet extends React.Component{


    render (){
        return (
            <div>{this.props.cats[0].name}</div>
        )
    }
}