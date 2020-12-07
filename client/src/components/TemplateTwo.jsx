import React, { Component } from 'react'
import ProfileImg from './ResumePageTwo/profileImg'
import ProfileName from './ResumePageTwo/ProfileName'
import PersonalDetail from './ResumePageTwo/personalDetail'
import Contact from './ResumePageTwo/contact'
import ProfessionalExp from './ResumePageTwo/Experience/professionalExp'
import Education from './ResumePageTwo/education/Education'
import Profileurl from './ResumePage/profileurl'
import ProfileStatus from './ResumePageTwo/profileStatus'
import Awards from './ResumePageTwo/Award/Awards'
import Skil from './ResumePageTwo/Skill/skil'
class TemplateTwo extends Component {
    render() {
        return (
            <div className="container " id="capture" style={{backgroundColor:'#fff',marginTop:100,height:2100,width:1400}}>
                <div className="row">
                    <div className="col-md-6 ml-5 mt-5">
                        <ProfileName
                         color={this.props.color} 
                         font={this.props.font}
                         />  
                    </div>
                    
                    <div className="col-md-4 ml-5 mt-5" >
                        <ProfileImg />
                    </div>
                    <Contact
                          color={this.props.color} 
                          font={this.props.font}
                          email={this.props.email}
                          phone={this.props.phone}
                          web={this.props.web}
                          skype={this.props.skype}
                           />
                </div>

                <div className="row">
                <div className="col-md-4 ml-5 mt-0">
                    <div className="profile-status">
                        <ProfileStatus
                            color={this.props.color}
                            font={this.props.font}
                             status={this.props.status}
                        />
                    </div>
                    <div className="skil ">
                        <Skil />
                    </div>
                
                    <div className="personal-detail mt-5">
                        <PersonalDetail 
                        color={this.props.color}
                        font={this.props.font}
                        birth={this.props.birth}
                        nation={this.props.nation}
                        address={this.props.address}
                       
                         />    
                    </div>
                    <div className="profile">
                         <Profileurl
                          color={this.props.color}
                          font={this.props.font}
                          linkdin={this.props.linkdin}
                          github={this.props.github}
                          medium={this.props.medium}
                          quara={this.props.quara}
                           />
                    </div>
                </div>
                    <div className="col-md-6 ml-5 mt-0" style={{marginLeft:-50}} >
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

                        <div className="award ml-2 mt-5">
                            <Awards 
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
export default TemplateTwo