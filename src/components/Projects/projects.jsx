import React, { Component } from 'react';
import "./projectstyles.css"

class Projects extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className="text-center m-5">
                        <h2>Recent Projects</h2><hr className="ml-5 mr-5"/>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="project1">
                            </div>
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Projects;