import React, { Component } from 'react'
import biologo from './public/image/profile-1.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p> I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction,
Senior trainer on Embedded systems and IOT at APSSDC.
Experimenting with Iot and Embedded Systems ; Dabbling with python,Vpython, C & embedded C . Exploring HTML,CSS,SData science and  Machine learning.
                    </p>
                    <p>
                    Graduate in Btech from GIET in Electronics and Communication engineering with an aggrigate of 74.04%
                    intermideate from Aditya with an aggrgate of 92%
                    SSC from Srzp High School with an Aggrigate of 86%

                    </p>

                
            </section>
        )
    }
}

export default About
