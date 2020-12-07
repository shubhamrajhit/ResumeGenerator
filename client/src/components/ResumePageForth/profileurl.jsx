import React, { Component } from 'react'

class profileurl extends Component {
    render() {
        return (
            <div className="mt-5 profileurl4">
            <div  className="iconsize" style={{marginLeft:-70}}><i class="fa fa-lightbulb-o" aria-hidden="true" style={{color:'#fff'}}></i></div>
                <span className="mb-1" style={{fontWeight:600,fontFamily:this.props.font,marginLeft:10,fontSize:'20px'}}>PROFILE DETAILS</span>
                <hr />
                    <div className="list-contact">
                        <ul style={{marginLeft:-60,marginTop:30}} >
                            <li >
                                <div className="single-contact" style={{display:this.props.github ?'block':'none'}}>
                                <i class="fa fa-github" aria-hidden="true" style={{marginRight:10,color:this.props.color}} ></i>
                                    <u><span
                                    className="contact-info" 
                                    contentEditable="true" 
                                    placeholder="Github Profile Info " 
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
                                    placeholder="Linkdin profile Info " 
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
                                    placeholder="Quara Profile Info " 
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
                                    placeholder="Medium Profile Info " 
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
export default profileurl