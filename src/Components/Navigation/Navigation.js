import React from 'react';

export default function Navigation(){
    const navStyle ={
        height: "100px",
        width: "100%",
        background: "black",
        color: "white",
        marginTop: "0"
    }

    const logo = {
        marginTop: "0"
    }
    return(
        <nav style={navStyle}>
<h1 style={logo}>Adopt A Pet</h1>
        </nav>
    
    )
} 