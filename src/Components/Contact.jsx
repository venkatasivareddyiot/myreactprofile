import React, { Component } from 'react'
import contact from '../Components/public/image/conta.gif';
import mailme from '../Components/public/image/mail.jpg';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Venkata Siva Reddy Tadi</strong></h3>
                <h4>IoT & Embedded Systems Trainer</h4>
                <h4>Email Id:venkatasivareddyiot@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=venkatasivareddyiot@gmail"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info:+91-9581645635/+91-7675816446</h4>

                
                
                        <a href="https://www.facebook.com/venkatasivareddy.tadi/">
                        <span className="icon fa fa-facebook" style={{color:'#395CF2'}} ></span>
                        </a>
                        <a href="https://twitter.com/venkats09999979?s=09" >
                                <span className="icon fa fa-twitter"  style={{color:'#78C5F5'}}></span>
                        </a>
                        <a href="https://github.com/venkatasivareddyiot">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/tadi-venkata-siva-reddy-b442b4131/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'#1DA5FA'}}></span>
                        </a>
                        <a href="https://www.youtube.com/channel/UCYA4YJU-A352LeAog1vrmww/">
                                <span className="icon fa fa-youtube" style={{color:'#EA1278'}}></span>
                        </a>
                
            </section>
        )
    }
}

export default Contact
