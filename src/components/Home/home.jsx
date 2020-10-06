import React, { Component } from 'react';
import "./homestyles.css"


class Home extends Component {
    render() { 
        return (
            <div className="homepage">
            <hr />
                    <div className="jumbotron">
                        <div className="container">
                            <h1 class="display-5 text-center">Ricardo Hernandez</h1>
                            <p class="lead text-center">Hi! My name is Ricardo Hernandez. I'm a United States based developer.</p>
                            <p class="lead text-center">I have a diverse set of skills ranging from HTML, CSS, & Javscript to Python.</p>
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Home;