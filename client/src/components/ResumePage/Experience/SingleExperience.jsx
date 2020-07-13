import React, { Component, useReducer } from 'react'

class SingleExperience extends Component {
   
    render() {
      
       
        return (
            <div className="resume mt-5 ">
                <div className="resume-summary" style={{backgroundColor:'blue'}}></div>
                <div className="resume-details">
                    <h4 className="position"  contentEditable="true" placeholder="Position" style={{color:'#BDC3C7',fontFamily:this.props.font}} ></h4>
                    <h6 className="mi-resume-company text-black" contentEditable="true" placeholder="Company " style={{color:'#BDC3C7',fontFamily:this.props.font}}></h6>
                    <h5 className="mi-resume-year" contentEditable="true" placeholder="Time Duration of job" style={{color:'#BDC3C7',fontFamily:this.props.font}}></h5>                      
                </div>
                <p className="describe" style={{color:'#BDC3C7'}}
                    contentEditable="true" placeholder="In this text Field you describe your role and try to 
                    write something attractive so that recruter can hire you as well  ">                       
                </p> 
                               
        </div>
        )
    }
}
export default SingleExperience