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
                    <div className="text-center m-5">
                        <h2>About me</h2><hr className="hr1"/>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <p>I am currently a Computer Science student at Gardner-Webb University.</p>
                            <p>My passion is programming where I am chasing that rush when I solve a problem. I love building things ranging from web apps to any challenge I can tackle. </p>
                        </div>
                    </div>
                    </div>
             </React.Fragment>       
            
         );
    }
}
 
export default Home;