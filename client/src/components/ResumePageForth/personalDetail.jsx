import React, { Component } from 'react'
import fontsSize from '../Editor/fontsSize'

class personalDetail extends Component {
    render() {
        return (
            <div className="personal4" style={{marginTop:40}}>
                    <div  className="iconsize" style={{marginLeft:-70}}><i class="fa fa-user" aria-hidden="true" style={{color:'#fff'}}></i></div>
                    <span className="mb-1" style={{
                    fontFamily:this.props.font,
                    fontSize:18,
                    marginLeft:5
                    
                    }}>  <b>PERSONAL INFO</b></span>
                    <hr />
                    <div className="list-personal mt-5" style={{marginLeft:-60}}>
                        <ul>
                            <li>
                                <div className="single-info" style={{display:this.props.birth ?'block':'none'}}>
                                    <p 
                                    style={{color:this.props.color
                                    ,fontWeight:700,
                                    marginBottom:-3,
                                    fontFamily:this.props.font
                                    }}>Birth Date</p>
                                    <p className="personal-info"
                                     contentEditable="true"
                                      placeholder="Enter your birth date" 
                                      style={{
                                          color:'#7F8C8D',
                                          fontFamily:this.props.font
                                          }}>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="single-info" style={{display:this.props.nation ?'block':'none'}}>
                                    <p style={{color:this.props.color
                                    ,fontWeight:700,
                                    marginBottom:-3,
                                    fontFamily:this.props.font
                                    }}>Nationality</p>
                                    <p className="personal-info" 
                                    contentEditable="true" 
                                    placeholder="Enter your nationality" 
                                    style={{
                                          color:'#7F8C8D',
                                          fontFamily:this.props.font
                                          }}>
                                      </p>
                                </div>
                            </li>
                            <li>
                                <div className="single-info" style={{display:this.props.address ?'block':'none'}}>
                                    <p style={{color:this.props.color
                                    ,fontWeight:700,
                                    marginBottom:-3,
                                    fontFamily:this.props.font
                                    }} >Address</p>
                                    <p className="personal-info"
                                     contentEditable="true"
                                      placeholder=" Enter your adresss"
                                      style={{
                                          color:'#7F8C8D',
                                          fontFamily:this.props.font
                                          }}>
                                     </p>
                                </div>
                            </li>
                                
                                
                                
                        </ul>
                    </div>
                
            </div>
        )
    }
}
export default personalDetail