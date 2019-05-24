import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {
    const navStyle = {
        height: "50px",
        width: "100%",
        background: "black",
        color: "white",
        marginTop: "0"
    }

    const logo = {
        marginTop: "0"
    }
    return (
        <React.Fragment>
            <nav style={navStyle} className="nav nav-grid">
                <div className="nav-grid-item">
                    <h1 style={logo}>Adopt A Pet</h1>
                </div>
                <div className="nav-grid-item">
                    <ul>
                        <li>
                            <Link to={'/adopt'} className="nav-links">Home</Link>
                        </li>
                        <li>
                            <Link to={'/adopt'} className="nav-links">Adopt</Link>
                        </li>
                    </ul>


                </div>
            </nav>
        </React.Fragment>

    )
} 