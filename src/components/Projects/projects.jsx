import React, { Component } from 'react';
import "./projectstyles.css"

class Projects extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className="text-center m-5">
                        <h1>Projects</h1><hr className="ml-5 mr-5"/>
                            
                            <div className="cont">

                            <div id="box1" class="box">
                                <div id="box1" >
                                    <h1>Genius Finance App</h1>
                                    <p>A tool that monitors stocks searched for through real-time data from Yahoo Finance API.</p>
                                    <p><b>Used:</b> Python, TKinter, MySQL</p>
                                </div>
                                <a class="github" target="_blank" href="https://github.com/ricardoh19/Genius-Finance-App">
                                    <img src={require('../../images/GitHub.png')} width="30" height="30" alt="logo"/>
                                </a>
                           
                            </div>
                                <div id="box1" class="box">
                                    <div id="box1" >
                                        <h1>Weather App</h1>
                                        <p>A Web app that uses OpenWeatherMap API to fetch the current weather in any city in the world.</p>
                                        <p><b>Used:</b> JavaScript, HTML/CSS</p>
                                    </div>
                                    <a class="github" target="_blank" href="https://github.com/ricardoh19/Weather-App">
                                        <img src={require('../../images/GitHub.png')} width="30" height="30" alt="logo"/>
                                    </a>
                                    <a target="_blank" href="https://determined-easley-5f0acc.netlify.app/" class="demo">Live Demo</a>
                                </div>

                                
                            </div>
        
                        </div>
                    </div>

         );
    }
}
 
export default Projects;