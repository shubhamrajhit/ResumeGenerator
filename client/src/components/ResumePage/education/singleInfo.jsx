import React, { Component } from 'react'

 class singleInfo extends Component {
    render() {
        return (
            <div className="resume mt-5 ">
                <div className="resume-summary">                      
                </div>
                <div className="resume-details">
                    <h4 className="degree"  contentEditable="true" placeholder="Degree" style={{color:'#BDC3C7'}} ></h4>
                    <h6 className="school " contentEditable="true" placeholder="School" style={{color:'#BDC3C7'}}></h6>
                               
                    </div>                   
            </div> 
        )
    }
}
export default singleInfo