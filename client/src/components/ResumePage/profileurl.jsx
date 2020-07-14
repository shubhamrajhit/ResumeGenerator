import React, { Component } from 'react'

export default class profileurl extends Component {
    render() {
        return (
            <div className="ml-3">
             <h4 className="mb-3" style={{fontWeight:600,fontFamily:this.props.font}}>PROFILE DETAILS</h4>
                    <div className="list-contact">
                        <ul>
                            <li>
                                <div className="single-contact" style={{display:this.props.github ?'block':'none'}}>
                                <i class="fa fa-github" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info" 
                                    contentEditable="true" 
                                    placeholder="Enter your birth date" 
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
                                <div className="single-contact" style={{display:this.props.linkdin ?'block':'none'}}>
                                <i class="fa fa-linkedin" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info" 
                                    contentEditable="true" 
                                    placeholder="Enter your Profile" 
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
                                <div className="single-contact" style={{display:this.props.quara ?'block':'none'}}>
                                <i class="fa fa-quora" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info" 
                                    contentEditable="true" 
                                    placeholder="Enter your Profile" 
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
                                <div className="single-contact" style={{display:this.props.medium ?'block':'none'}}>
                                <i class="fa fa-medium" aria-hidden="true" style={{marginRight:10,color:this.props.color}}  ></i>
                                    <u><span
                                    className="contact-info" 
                                    contentEditable="true" 
                                    placeholder="Enter your Profile" 
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
