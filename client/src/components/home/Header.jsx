import React, { Component } from 'react'
import bgimg from "../../static/img/back.png";
import color from '../Editor/color';


class Header extends Component {
    render() {
        return (
            <div className="container-fluid header">
                <div className="row bg-img" style={{
                     backgroundImage: `url(${bgimg})`,
                    backgroundSize: `cover`,
                    height:400,        
                }}>
                </div>
                <div className="col-md-6  bgtextitem">
                    <h1 style={{
                            fontFamily:"palatino",
                            }}
                        >Here You Can Design Your Resume
                    </h1>
                </div>
                <div className="mx-auto my-4">
                    <a className="hsr" href="#sampletemp"  style={{fontFamily:'palatino'}}>Create your Resume From the Given Templates</a>
                </div>
               

                
                
                
            </div>
        )
    }
}
export default Header