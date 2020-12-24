import React, { Component } from 'react';
import "./resumestyles.css"

class Resume extends Component {
    
    render() { 
        return ( 
            <div className="container mt-5">
                <p>Click link to view Resume: </p>
                <a style={{display: "table-cell"}} href="https://drive.google.com/file/d/1I4sut36F6teXHsk0jqd7GEXA3_bMlwpU/view" target="_blank">Resume</a>
            </div>
         );
    }
}
 
export default Resume;