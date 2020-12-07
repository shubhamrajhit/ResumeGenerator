import React, { Component, useReducer } from 'react'

class SingleExperience extends Component {
   
    render() {
      
       
        return (
            <div className="resume ">
                <div className="resume-summary" style={{backgroundColor:'blue'}}></div>
                <div className="resume-details">
                    <h6 className="mi-resume-year float-right" contentEditable="true" placeholder="Time Duration of job" style={{color:'#BDC3C7',marginTop:10,fontFamily:this.props.font}}></h6>  
                    <h4 className="position"  contentEditable="true" placeholder="Position" style={{color:'#000',fontFamily:this.props.font}} ></h4>                    
                    <h5 className="mi-resume-company text-black ml-1" contentEditable="true" placeholder="Company " style={{color:'#535556',fontFamily:this.props.font}}></h5>
                   
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