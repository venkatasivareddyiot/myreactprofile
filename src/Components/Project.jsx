import React, { Component } from 'react'

import pyimg from '../Components/public/image/pythonimg.png'
import arduino from '../Components/public/image/arduino.jpg'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import arm from '../Components/public/image/arm.jpg'
import ds from '../Components/public/image/ds.jpg'
import mit from '../Components/public/image/mit logo.png'
import ml from '../Components/public/image/ml.jpg'
import pic from '../Components/public/image/pic.jpg'
import seli from '../Components/public/image/seli.png'
import s4a from '../Components/public/image/s4a.png'
import rpi from '../Components/public/image/rpi.png'
import mc from '../Components/public/image/8051.png'
import st from '../Components/public/image/st.jpg'
import altium from '../Components/public/image/altium.png'
import pcb from '../Components/public/image/pcb.jpg'







class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={pyimg} width="100" height="100" alt="python"/></div>
                    <div><img src={arduino} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={arm} width="100" height="100" alt="arm"/></div>
                    <div><img src={ds} width="100" height="100" alt="ds"/></div>  
                    <div><img src={mit} width="100" height="100" alt="mit"/></div>
                    <div><img src={ml} width="100" height="100" alt="ml"/></div>
                    <div><img src={pic} width="100" height="100" alt="pic"/></div>
                    <div><img src={seli} width="100" height="100" alt="seli"/></div>
                    <div><img src={s4a} width="100" height="100" alt="s4a"/></div>
                    <div><img src={rpi} width="100" height="100" alt="rpi"/></div>
                    <div><img src={mc} width="100" height="100" alt="mc"/></div>
                    <div><img src={st} width="100" height="100" alt="st"/></div>
                    <div><img src={altium} width="100" height="100" alt="altium"/></div>
                    <div><img src={pcb} width="100" height="100" alt="pcb"/></div>
            </section>
        )
    }
}

export default Project
