import React, { Component } from 'react'
import ProfileImg from './ResumePageForth/profileImg'
import ProfileName from './ResumePageForth/ProfileName'
import PersonalDetail from './ResumePageForth/personalDetail'
import Contact from './ResumePageForth/contact'
import ProfessionalExp from './ResumePageForth/Experience/professionalExp'
import Education from './ResumePageForth/education/Education'
import Profileurl from './ResumePageForth/profileurl'
import ProfileStatus from './ResumePageForth/profileStatus'
import Awards from './ResumePageForth/Award/Awards'
import Skil from './ResumePageForth/Skill/skil'
import Certificates from './ResumePageForth/certificate/certificates'
class TemplateForth extends Component {
    render() {
        return (
            <div className="container" id="capture" style={{backgroundColor:'#fff',marginTop:55,marginBottom:20,height:2400,width:'100%'}}>
                <div className="row">
                        <div className="col-md-6  mt-5 ml-4">
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
                        <div className="col-md-2"></div>
                        
                        <div className="col-md-3  mt-5" >
                        <ProfileImg />
                        </div>
                    
                </div>

                <div className="row">

                    <div className="col-md-9 ml-5" style={{marginLeft:0}} >
                        
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
                            <div className="col-md-2 mt-3">
                            <div className="personal-detail">
                                <PersonalDetail 
                                color={this.props.color}
                                font={this.props.font}
                                birth={this.props.birth}
                                nation={this.props.nation}
                                address={this.props.address}
                            
                                />    
                            </div>
                            <div className="skil ">
                                <Skil />
                            </div>
                            <h2></h2>
                            <div className="profileUrl">
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
                    <div className="col-md-1 ml-5"></div>
                
                </div>
                
            </div>
        )
    }
}
export default TemplateForth