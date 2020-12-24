import React, { Component } from 'react';
import "./projectstyles.css"

class Projects extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className="text-center m-5">
                        <h2>Projects</h2><hr className="ml-5 mr-5"/>
                            
                            <div className="cont">
                                <div id="box1" class="box">
                                    <div id="box1" >
                                        <h1>To-Do List</h1>
                                        <p>The user can add or delete a task. Information of task is provided.</p>
                                        <p>Used: React, JavaScript, HTML/CSS</p>
                                    </div>
                                    <a class="github" target="_blank" href="https://github.com/ricardoh19/react-To-do-list">
                                            <img src={require('../../images/GitHub.png')} width="30" height="30" alt="logo"/>
                                        </a>
                                    <a target="_blank" href="https://wizardly-noyce-328b84.netlify.app/" class="demo">Live Demo</a>
                                </div>

                                <div id="box1" class="box">
                                    <div id="box1" >
                                        <h1>Form Validator</h1>
                                        <p>A form that allows the user to register.</p>
                                        <p>Used: JavaScript, HTML/CSS</p>
                                    </div>
                                    <a class="github" target="_blank" href="https://github.com/ricardoh19/Form-authentication">
                                            <img src={require('../../images/GitHub.png')} width="30" height="30" alt="logo"/>
                                        </a>
                                    <a target="_blank" href="https://happy-raman-5aacde.netlify.app/" class="demo">Live Demo</a>
                                </div>
                            </div>
                                
                            
                        </div>
                    </div>

         );
    }
}
 
export default Projects;