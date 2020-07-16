import React, { Component } from 'react'
import ProfileImg from './profileImg'
import ProfileName from './ProfileName'
import PersonalDetail from './personalDetail'
import Contact from './contact'
import ProfessionalExp from './Experience/professionalExp'
import Education from './education/Education'
import Profileurl from './profileurl'
import ProfileStatus from './profileStatus'
import Skill from './skill/skill'
class ResumePage extends Component {
    state={

    }
    render() {
        console.log(this.props.birth)
        return (
            <div className="container mb-4" id="capture" style={{backgroundColor:'#fff',marginTop:100,height:2100,width:1400}}>
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
                    <div className="profile-status">
                        <ProfileStatus
                            color={this.props.color}
                            font={this.props.font}
                             status={this.props.status}
                        />
                    </div>
                
                    <div className="personal-detail">
                        <PersonalDetail 
                        color={this.props.color}
                        font={this.props.font}
                        birth={this.props.birth}
                        nation={this.props.nation}
                        address={this.props.address}
                       
                         />    
                    </div>
                    <div className="contact">
                         <Contact
                          color={this.props.color} 
                          font={this.props.font}
                          email={this.props.email}
                          phone={this.props.phone}
                          web={this.props.web}
                          skype={this.props.skype}
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
                        <h4 className=" mt-5" style={{fontWeight:600 ,fontFamily:this.props.font}}> SKILL</h4>
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="skill">
                                        <Skill 
                                        color={this.props.color}
                                        font={this.props.font}
                                    />
                                    </div>
                                
                                </div>
                                <div className="col-md-5" >
                                    <div className="skill">
                                        <Skill 
                                        color={this.props.color}
                                        font={this.props.font}
                                    />
                                    </div>
                                
                                </div>
                        </div>
                       
                        
                        
                    </div>
                
                </div>
                
            </div>
        )
    }
}
export default ResumePage