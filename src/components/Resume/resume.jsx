import React, { Component } from 'react';
import "./resumestyles.css"

class Resume extends Component {
    
    render() { 
        return ( 
            <div className="container mt-5">
                <p>Click link to view Resume: </p>
                <a style={{display: "table-cell"}} href="https://drive.google.com/file/d/1mxVzFUjHRbzPyA6qbffRdTrzK_D3WvJ6/view" target="_blank">Resume</a>
            </div>
         );
    }
}
 
export default Resume;