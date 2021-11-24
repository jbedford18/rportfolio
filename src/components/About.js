
import myPhoto from '../assets/images/me.jpeg'

import React from 'react'

function About() {

  return (
    <section id="about" className= "about-sect">
      <div className="my-2">
      <img className="myPhoto" src={myPhoto} alt="about-me"></img>
        <p>
        Welcome to the portfolio of Justin Bedford! To start off with, I am a recent graduate
                from the University of Central Florida. In my studies there, I obtained a Bachelor of
                Science degree in a major of Health Sciences Pre-clinical. After over 8 years of 
                working in healthcare I have made a life choice to switch things up. Come checkout my
                work as I embark on the never-ending journey of learning web development!  
        </p>
      </div>
    </section>
  );
  }




export default About;
