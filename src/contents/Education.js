import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.E Information Technology" where="GIT Gandhinagar" from="July 2017" to="Present"/>
            <Widecard title="SSLC | HSC" where="St Mary's School" from="2011" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    