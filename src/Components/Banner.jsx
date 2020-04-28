import React, { Component } from 'react'
import logo from '../Components/public/image/img-1.png';
import cse from '../Components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm  venkatasivareddy </h1>
                    <p id="paragarph1"> Embedded Systems & <br/>
                    Iot Developer</p>
                    <a id="logo" href="https://www.youtube.com/watch?v=i0a-q-6HYRU&t=37s" ><img src={cse} width="30" height="30" alt="cselogo"/></a> 
                    
            </section>
        )
    }
}

export default Banner


