import React, { Component } from 'react';
import "./projectstyles.css"

class Projects extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className="text-center m-5">
                        <h2>Recent Projects</h2><hr className="ml-5 mr-5"/>
                            <div className="project1">
                                <a class="project-image" target="_blank" href="https://wizardly-noyce-328b84.netlify.app/">
                                    <img src={require('../../images/todolist.jpg')} width="470" height="250" alt="logo"/>
                                </a>
                                    <p>The user can add or delete a task. The task shows date that it was added.</p>
                                    <h2 className="m-3">To-do List</h2>
                                    <a class="github" target="_blank" href="https://github.com/ricardoh19/react-To-do-list">
                                        <img src={require('../../images/GitHub.png')} width="30" height="30" alt="logo"/>
                                    </a>
                                <a target="_blank" href="https://wizardly-noyce-328b84.netlify.app/" class="demo">Live Demo</a>
                            </div>
                            
                        </div>
                    </div>

         );
    }
}
 
export default Projects;