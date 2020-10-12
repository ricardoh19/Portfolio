import React, { Component } from 'react';
import "./contact.css"

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="text-center m-5">
                    <h2>Contact me</h2><hr className="hr1"/>
                    <div class="logos">
                        <a href="https://linkedin.com/in/ricardo-hernandez-8242b474">
                            <img src={require('../../images/LI.png')} width="35" height="30" alt="logo"/>
                        </a>
                        <a href="https://github.com/ricardoh19">
                            <img src={require('../../images/GitHub.png')} width="30" height="30" alt="logo"/>
                        </a>
                        <a href="https://instagram.com/ricky_codes/">
                            <img src={require('../../images/IG.png')} width="30" height="30" alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;