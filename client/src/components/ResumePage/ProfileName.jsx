import React, { Component } from 'react'

class ProfileName extends Component {
    render() {
        return (
            <div className="namecontainer ">                             
                <div className="name-info">
                    <div className="name-pro-info">
                        <p className="c-name"
                          contenteditable="true"
                           placeholder="Your name"
                            style={{color:this.props.color,fontSize:'4rem',fontFamily:this.props.font}}
                        ></p>
                        <p className="expert" 
                        contentEditable="true" 
                        placeholder="Your profession or speciality"
                         style={{color:'#7F8C8D',fontSize: "1.4rem",fontFamily:this.props.font}}></p>
                    </div>

                </div>
            </div>
        )
    }
}
export default ProfileName