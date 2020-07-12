import React, { Component } from 'react'

class personalDetail extends Component {
    render() {
        return (
            <div className="mb-5 ml-3">
                <h4 className="mb-5" style={{fontWeight:600}}>  PERSONAL DETAILS</h4>
                    <div className="list-personal">
                        <ul>
                            <li>
                                <div className="single-info">
                                    <p style={{color:this.props.color,fontWeight:700,marginBottom:-3}}>Birth Date</p>
                                    <p className="personal-info" contentEditable="true" placeholder="Enter your birth date" style={{color:'#7F8C8D'}}></p>
                                </div>
                            </li>
                            <li>
                                <div className="single-info">
                                    <p style={{color:this.props.color,fontWeight:700,marginBottom:-3}}>Nationality</p>
                                    <p className="personal-info" contentEditable="true" placeholder="Enter your nationality" style={{color:'#7F8C8D'}}></p>
                                </div>
                            </li>
                            <li>
                                <div className="single-info">
                                    <p style={{color:this.props.color,fontWeight:700,marginBottom:-3}} >Address</p>
                                    <p className="personal-info" contentEditable="true" placeholder=" Enter your adresss" style={{color:'#7F8C8D'}}></p>
                                </div>
                            </li>
                                
                                
                                
                        </ul>
                    </div>
                
            </div>
        )
    }
}
export default personalDetail