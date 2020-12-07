import React, { Component, useReducer } from 'react'

class SingleExperience extends Component {
   
    render() {
      
       
        return (
            <div className="resume4">
                <div className="resume-details4">
                    <h6 className="mi-resume-year float-left" contentEditable="true" placeholder="Year" style={{color:'#BDC3C7',marginTop:3,fontFamily:this.props.font,marginLeft:-125,width:90}}></h6>  
                    <h4 className="position"  contentEditable="true" placeholder="Position" style={{color:'#000',fontFamily:this.props.font}} ></h4>                    
                    <h5 className="mi-resume-company text-black ml-1" contentEditable="true" placeholder="Company " style={{color:'#535556',fontFamily:this.props.font}}></h5>
                   
                
                <p className="describe" style={{color:'#BDC3C7'}}
                    contentEditable="true" placeholder="In this text Field you describe your role and try to 
                    write something attractive so that recruter can hire you as well  ">                       
                </p> 
                </div>
                               
        </div>
        )
    }
}
export default SingleExperience