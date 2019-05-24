import React from 'react';
import "./App.css"
import Navigation from './Components/Navigation/Navigation'
function App() {
  return (
    <div className="App">
      <header>
        <Navigation></Navigation>
      </header>

      <section className="landing-banner">
        <h1>Adopt A pet Today!</h1>
      </section>
      <main>
        <p>As a pet lover, I want to go to the FIFO pet adoption
           site so that I can get more information about the
           adoption process
  
           Acceptance criteria
  
           When I go to the FIFO adoption agency site
  
           The site has a description of the adoption process
           It has a meaningful picture that matches its description
         A button indicating that I can start the adoption process</p>
      </main>

    </div>
  );
}

export default App;
