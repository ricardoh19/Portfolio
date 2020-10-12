import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Navigate from './components/Navbar/navigate';
import Footer from "./components/Footer/footer"
import "bootstrap/dist/css/bootstrap.css"
import Resume from './components/Resume/resume';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <Navigate />
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path="/resume" component={Resume} />
        <Footer />
      </Router>
      
     );
  }
}
 
export default App;