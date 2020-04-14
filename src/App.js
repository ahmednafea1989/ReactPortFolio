import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import Nav from "./Nav";
import PortFolio from "./Page/PortFolio";
import Footer from "./Footer/Footer";


function App (){
    return (
        
        <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/PortFolio" component={PortFolio} />
   
      </div>
      <Footer/>
    </Router>

        )
        
  

}
export default App;