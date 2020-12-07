import React, { Component } from 'react'
import ProfileImg from './ResumePageThree/profileImg'
import ProfileName from './ResumePageThree/ProfileName'
import PersonalDetail from './ResumePageThree/personalDetail'
import Contact from './ResumePageThree/contact'
import ProfessionalExp from './ResumePageThree/Experience/professionalExp'
import Education from './ResumePageThree/education/Education'
import Profileurl from './ResumePage/profileurl'
import ProfileStatus from './ResumePageThree/profileStatus'
import Awards from './ResumePageThree/Award/Awards'
import Skil from './ResumePageThree/Skill/skil'
import Certificates from './ResumePageThree/certificate/certificates'
class TemplateThree extends Component {
    render() {
        return (
            <div className="container" id="capture" style={{backgroundColor:'#fff',marginTop:55,marginBottom:20,height:2400,width:'100%'}}>
                <div className="row">
                    <div className="col-md-2" style={{backgroundColor:'#142878',marginTop:145}}></div>
                        <div className="col-md-6  mt-5">
                        <ProfileName
                         color={this.props.color} 
                         font={this.props.font}
                         />  
                         <Contact
                          color={this.props.color} 
                          font={this.props.font}
                          email={this.props.email}
                          phone={this.props.phone}
                          web={this.props.web}
                          skype={this.props.skype}
                           />
                           <ProfileStatus
                            color={this.props.color}
                            font={this.props.font}
                             status={this.props.status}
                        />
                    
                        </div>
                        
                        <div className="col-md-3  mt-5" >
                        <ProfileImg />
                        </div>
                    
                </div>

                <div className="row">
                <div className="col-md-2" style={{backgroundColor:'#142878'}}></div>
                    <div className="col-md-10 " style={{marginLeft:0}} >
                        <div className="resume-wrapper" style={{marginLeft:25}}>
                            <div className="education ">
                                <Education 
                                color={this.props.color}
                                font={this.props.font}
                                />
                            </div>
                            <div className="professionalExp">
                                <ProfessionalExp
                                color={this.props.color}
                                font={this.props.font}
                                />
                            </div>
                            <div className="skil ">
                                <Skil />
                            </div>

                            <div className="award  mt-5">
                                <Awards 
                                color={this.props.color}
                                font={this.props.font}
                                />
                            </div>
                            <div className="award  mt-5">
                                <Certificates 
                                color={this.props.color}
                                font={this.props.font}
                                />
                            </div>
                           
                        </div>
                       
                        
                        
                    </div>
                
                </div>
                
            </div>
        )
    }
}
export default TemplateThree