import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
                <footer className="footer"><hr className="ml-5 mr-5"/>
                    <div className="container">
                        <p style={{fontSize: '16px'}}>Copyright @ Ricardo Hernandez 2020</p>
                    </div>
                </footer>
         );
    }
}
 
export default Footer;