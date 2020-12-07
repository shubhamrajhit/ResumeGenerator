import React, { Component } from 'react'


class contact extends Component {
    render() {
        console.log(this.props.birth)
        return (
            <div className="ml-3 mb-5 list-contact2" style={{marginTop:-25}}>
                        <ul >
                            <li >
                                <div className="single-contact2 ml-3" style={{display:this.props.email ?'block':'none'}}> 
                                <i class="fa fa-envelope" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info2"
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
                                <div className="single-contact2" style={{display:this.props.phone ?'block':'none'}}>
                                <i class="fa fa-phone-square" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info2"
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
                                <div className="single-contact2" style={{display:this.props.web ?'block':'none'}}>
                                <i class="fa fa-chrome" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info2"
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
                                <div className="single-contact2" style={{display:this.props.skype ?'block':'none'}}>
                                <i class="fa fa-skype" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info2"
                                     contenteditable="true"
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
               
            
        )
    }
}
export default contact