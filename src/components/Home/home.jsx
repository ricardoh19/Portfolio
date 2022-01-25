import React, { Component } from 'react';
import "./homestyles.css"


class Home extends Component {
    render() { 
        return (
            <React.Fragment>
                    <div className="jumbotron">
                        <div className="container">
                            <h1 class="display-5 text-center">Ricardo Hernandez</h1><hr className="hr1"/>
                            <p class="lead text-center">Student based in United States and aspiring developer.</p>
                        </div>
                    </div>
                    <div className="container">
                    <br /><br />
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <p>My passion is programming where I am chasing that rush when I solve a problem. I love building apps and projects that have a positive impact on people.</p>
                        </div>
                    </div>
                    </div>
             </React.Fragment>       
            
         );
    }
}
 
export default Home;