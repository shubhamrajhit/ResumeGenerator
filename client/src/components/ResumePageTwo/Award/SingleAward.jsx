import React, { Component } from 'react'

class SingleAward extends Component {
    render() {
        return (
            <div>
                <div className="resume mt-5">
                    <div className="skill-summary" style={{marginTop:70}}>                      
                    </div>
                    <div className="resume-details" >
                        <h4 className="degree"  contentEditable="true" placeholder="Awards" style={{color:'#000',fontFamily:this.props.font}} ></h4>
                        <h6 className="school ml-1" contentEditable="true" placeholder="Position" style={{color:'#535556',fontFamily:this.props.font}}></h6>
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
export default SingleAward