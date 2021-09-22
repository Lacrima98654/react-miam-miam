import React from "react";
import Acceuil from './components/Acceuil';
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Footer from "./components/ Footer";

import './style/App.css';

//===================================//
function App(){
  return (
      <React.Fragment>
          <Acceuil/>
          <div className="body">
              <Menu/>
              <About/>
              <Contact/>
              <Shop/>
              <Footer/>
          </div>
      </React.Fragment>
  );
}

export default App;
