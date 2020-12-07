import React, { Component } from 'react'

class SingleCertificate extends Component {
    render() {
        return (
            <div>
                <div className="resume mt-5">
                    <div className="resume-summary3" style={{marginTop:70}}></div>
                    <div className="resume-details" >
                    <h6 className="mi-resume-year float-left" contentEditable="true" placeholder="year" style={{color:'#BDC3C7',marginTop:0,fontFamily:this.props.font,marginLeft:-200}}></h6>  
                        <h6 className="school ml-1" contentEditable="true" placeholder="certificates" style={{color:'#535556',fontFamily:this.props.font}}></h6>
                        <p className="describe" style={{color:'#BDC3C7'}}
                            contentEditable="true" placeholder="In this text Field you describe your role and try to 
                            write something attractive so that recruter can hire you as well  ">                       
                        </p>              
                    </div>
                                    
                </div> 
            </div>
        )
    }
}
export default SingleCertificate