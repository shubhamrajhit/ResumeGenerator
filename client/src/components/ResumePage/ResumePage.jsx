import React, { Component } from 'react'
import ProfileImg from './profileImg'
import ProfileName from './ProfileName'
import PersonalDetail from './personalDetail'
import Contact from './contact'
import ProfessionalExp from './Experience/professionalExp'
import Education from './education/Education'
import Profileurl from './profileurl'
class ResumePage extends Component {
    state={

    }
    render() {
        console.log(this.props.birth)
        return (
            <div className="container" style={{backgroundColor:'#fff',marginTop:10,height:2100,width:1400}}>
                <div className="row">
                    <div className="col-md-4 ml-5 mt-5" >
                        <ProfileImg />
                    </div>
                    <div className="col-md-6 ml-5 mt-5">
                        <ProfileName
                         color={this.props.color} 
                         font={this.props.font}
                         />  
                    </div>
                </div>

                <div className="row">
                <div className="col-md-4 ml-5 mt-5">
                    <div className="personal-detail">
                        <PersonalDetail 
                        color={this.props.color}
                        font={this.props.font}
                         />    
                    </div>
                    <div className="contact">
                         <Contact
                          color={this.props.color} 
                          birth={this.props.birth}
                          font={this.props.font}
                           />
                    </div>
                    <div className="profile">
                         <Profileurl
                          color={this.props.color}
                          font={this.props.font}
                           />
                    </div>
                </div>
                    <div className="col-md-6 mt-5 ml-2 " style={{marginLeft:-50}} >
                        <div className="professionalExp">
                            <ProfessionalExp
                             color={this.props.color}
                             font={this.props.font}
                              />
                        </div>
                        <div className="education ml-2">
                            <Education 
                            color={this.props.color}
                            font={this.props.font}
                             />
                        </div>
                    </div>
                
                </div>
                
            </div>
        )
    }
}
export default ResumePage