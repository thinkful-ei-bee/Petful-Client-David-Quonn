import React from 'react';
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="landing-banner">
                </section>
                <main>
                    <h1>How The Process Works...</h1>
                    <p>
                        Users wishing to adopt a pet has two pets to choose from. Adoption works on a
                        "First In - First Out" basis, so the first animal taken in at the
                        must be adopted first. You may adopt a cat, a dog or both!
                        Users are put into queue so that they can adopt when its thier turn.
                        Happy Adopting!
                   </p>

                    <Link to={'/adopt'}>Get Started!</Link>
                </main>
            </React.Fragment>
        )
    }
}