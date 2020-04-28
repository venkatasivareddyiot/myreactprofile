import React, { Component } from 'react'
import w1 from '../Components/public/image/w-1.jpeg';
import w2 from '../Components/public/image/w-2.jpeg';
import w3 from '../Components/public/image/w-3.jpeg';
import w4 from '../Components/public/image/w-4.jpeg';
import w5 from '../Components/public/image/w-5.jpeg';
import w6 from '../Components/public/image/w-6.jpeg';
import w7 from '../Components/public/image/w-7.jpeg';
import w8 from '../Components/public/image/w-8.jpeg';
import w9 from '../Components/public/image/w-9.jpeg';





class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>WorkShops</h1>
                  <h2>Glimpse from some of My WorkShops.</h2>

                    <div className="container">
                        <a><img src={w1} width="700" height="400" /><p>Summer program at Pragathi Engneering College</p></a>
                        <a><img src={w2} width="700" height="400"  /><p> Iot WorkShop at gudlavalleru Engneering College</p></a>
                        
                    </div>
                    <div className="container">
                        <a><img src={w3} width="700" height="400"  /><p>Embedded Systems Workshop at KSRM</p></a>
                        <a><img src={w4} width="700" height="400"  /><p>IoT with Node MCU at VVIT</p></a>
                        
                    </div>
                    <div className="container">
                        <a><img src={w5} width="700" height="400"  /><p>FDP on IoT at KHIT</p></a>
                        <a><img src={w6} width="700" height="400"  /><p> Iot WorkShop at Pragathi Engneering College</p></a>
                        
                    </div>
                     <div className="container">
                        <a><img src={w7} width="700" height="400"  /><p>Iot Workshop  at KORM</p></a>
                        <a><img src={w8} width="700" height="400" /><p> Embedded Systems WorkShop at IIIT Nuzividu</p></a>
                        
                    </div>


                    <div className="container">
                    <a><img src={w9} width="700" height="400"  /><p> Iot WorkShop at Anantha Lakshmi Engneering College</p></a>
                        
                    </div>
                       
            </section>
        )
    }
}

export default Portfolio


