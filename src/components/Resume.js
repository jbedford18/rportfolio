import React from "react";
import res from '../assets/images/res.PNG'

function Resume() {
    return(
        <section id="resume">
        <div className="resume-wrapper">
            <div className="main-info">
             <img className="resume-img" src={res} alt={res} />
             <div className="text-center m-top-50">
             <a className="resumeButton line-btn-dark btn-icon btn-radius" href={res} title="" download>Download Resume</a>
            
            </div>
            </div>
        </div>
        </section>
    )
}

export default Resume;