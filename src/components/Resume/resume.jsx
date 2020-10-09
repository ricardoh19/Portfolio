import React, { Component } from 'react';

class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="m-2">
                <p>Click link to view Resume: </p>
                <a style={{display: "table-cell"}} href="https://drive.google.com/file/d/1vr3O5sVSCqBLCpFVQAhGLkfEfPMm0Gve/view" target="_blank">Resume</a>
            </div>
         );
    }
}
 
export default Resume;