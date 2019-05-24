import React from 'react';
import "./App.css"
import Navigation from './Components/Navigation/Navigation'
import AdoptionPage from './Components/AdoptionPage/AdoptionPage'
import LandingPage from './Components/LandingPage/LandingPage'
import { Route, Switch } from "react-router-dom";

function App() {

  const handleButtonClick = () => {
    console.log("u")
  }

  return (
    <div className="App">
      <header>
        <Navigation></Navigation>
      </header>
      <Switch>
      <Route exact path={"/"}  component={LandingPage}/>
      <Route exact path={"/adopt"} component={AdoptionPage} />
      </Switch>
    </div>
  );
}

export default App;
