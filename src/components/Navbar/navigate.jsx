import React, { Component } from 'react';
import "./navstyles.css"

class Navigate extends Component {
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <img src={require('../../images/logo_size_invert.jpg')} width="50" height="50" alt="logo"/>
              <a class="navbar-brand m-2" href="/">Ricardo Hernandez</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse"id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto" id="navbar">
                  <a class="nav-item nav-link" id="item" href="/">Home <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" id="item" href="/projects">Projects</a>
                  <a class="nav-item nav-link" id="item" href="/resume">Resume</a>
                  <a class="nav-item nav-link" id="item" href="/contact">Contact</a>
              </div>
            </div>
          </nav>
         );
    }
}
 
export default Navigate;