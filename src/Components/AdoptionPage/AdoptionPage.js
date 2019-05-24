import React from 'react';
import { Link } from "react-router-dom";

export default class AdoptionPage extends React.Component{
    render(){
        return(
            <section>
                <h1>Adoption Page</h1>
                <Link to={'/'}>Back To Home</Link>
            </section>
        )
    }
}