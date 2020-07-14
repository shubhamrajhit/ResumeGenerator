import React, { Component } from 'react'

class contact extends Component {
    render() {
        console.log(this.props.birth)
        return (
            <div className="ml-3 mb-5">
             <h4 className="mb-3" style={{fontWeight:600,fontFamily:this.props.font}}>CONTACT DETAILS</h4>
                    <div className="list-contact">
                        <ul>
                            <li>
                                <div className="single-contact" style={{display:this.props.email ?'block':'none'}}>
                                     <i class="fa fa-envelope" aria-hidden="true" style={{marginRight:10,color:this.props.color}}></i>
                                    <u><span
                                    className="contact-info"
                                     contentEditable="true" 
                                     placeholder="Enter your Email" 
                                     style={{
                                         color:'#7F8C8D',
                                         fontFamily:this.props.font
                                         }}
                                         >
                                    </span>
                                    </u>
                                </div>    
                            </li>
                            <li>
                                <div className="single-contact" style={{display:this.props.phone ?'block':'none'}}>
                                <i class="fa fa-phone-square" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info"
                                     contentEditable="true" 
                                     placeholder="Enter your Phone No."
                                     style={{
                                         color:'#7F8C8D',
                                         fontFamily:this.props.font
                                         }}
                                         >
                                    </span>
                                    </u>
                                </div>    
                            </li>
                            <li>
                                <div className="single-contact" style={{display:this.props.web ?'block':'none'}}>
                                <i class="fa fa-chrome" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info"
                                     contentEditable="true"
                                      placeholder="Enter your Website" 
                                      style={{
                                         color:'#7F8C8D',
                                         fontFamily:this.props.font
                                         }}
                                         >
                                    </span>
                                    </u>
                                </div>    
                            </li>
                            <li>
                                <div className="single-contact" style={{display:this.props.skype ?'block':'none'}}>
                                <i class="fa fa-skype" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info"
                                     contentEditable="true"
                                      placeholder="your Profile" 
                                      style={{
                                         color:'#7F8C8D',
                                         fontFamily:this.props.font
                                         }}
                                         >
                                    </span>
                                    </u>
                                </div>    
                            </li>
                           
                                
                                
                                
                        </ul>
                    </div>
                
            </div>
        )
    }
}
export default contact