import React from 'react';
import "./App.css"
import Navigation from './Components/Navigation/Navigation'
import AdoptionPage from './Components/AdoptionPage/AdoptionPage'
import LandingPage from './Components/LandingPage/LandingPage'
import { Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header>
          <Navigation></Navigation>
      </header>
      <main>
         <Route exact path={"/"}  component={LandingPage}/>
         <Route exact path={"/adopt"} component={AdoptionPage} />
      </main>
    </div>
  );
}

export default App;
