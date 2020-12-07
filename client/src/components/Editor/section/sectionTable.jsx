import React, { Component } from 'react'

class sectionTable extends Component {
    state={
        birth:true,
        nation:true,
        address:true,
        status:true,
        email:true,
        phone:true,
        skype:true,
        web:true,
        linkdin:true,
        github:true,
        medium:true,
        quara:true

    }
    handleBirth=()=>{
        this.setState((prevState)=>{
            return {birth: !prevState.birth};    
        });
        this.props.handleBirth(this.state.birth)
    }
    handleNation=()=>{
        this.setState((prevState)=>{
            return {nation: !prevState.nation};    
        });
        this.props.handleNation(this.state.nation)
    }
    handleAdress=()=>{
        this.setState((prevState)=>{
            return {address: !prevState.address};    
        });
        this.props.handleAddress(this.state.address)
    }
    handleStatus=()=>{
        this.setState((prevState)=>{
            return {status: !prevState.status};    
        });
        this.props.handleStatus(this.state.status)
    }
    handleEmail=()=>{
        this.setState((prevState)=>{
            return {email: !prevState.email};    
        });
        this.props.handleEmail(this.state.email)
    }
    handlePhone=()=>{
        this.setState((prevState)=>{
            return {phone: !prevState.phone};    
        });
        this.props.handlePhone(this.state.phone)
    }
    handleSkype=()=>{
        this.setState((prevState)=>{
            return {skype: !prevState.skype};    
        });
        this.props.handleSkype(this.state.skype)
    }
    handleWeb=()=>{
        this.setState((prevState)=>{
            return {web: !prevState.web};    
        });
        this.props.handleWeb(this.state.web)
    }
    handleLinkdin=()=>{
        this.setState((prevState)=>{
            return {linkdin: !prevState.linkdin};    
        });
        this.props.handleLinkdin(this.state.linkdin)
    }
    handleGithub=()=>{
        this.setState((prevState)=>{
            return {github: !prevState.github};    
        });
        this.props.handleGithub(this.state.github)
    }
    handleMedium=()=>{
        this.setState((prevState)=>{
            return {medium: !prevState.medium};    
        });
        this.props.handleMedium(this.state.medium)
    }
    handleQuara=()=>{
        this.setState((prevState)=>{
            return {quara: !prevState.quara};    
        });
        this.props.handleQuara(this.state.quara)
    }
    render() {
        // const final=this.state.birth ? checked :null
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="personal-sec">
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleStatus }></input>
                                <label style={{marginLeft:10,fontSize:10}} >Profile</label>
                            </div>
                            <h5 style={{fontSize:11}}><b>PERSONAL DETAILS</b></h5>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleBirth }   ></input>
                                <label style={{marginLeft:10,fontSize:10}} >BIRTH DATE</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleNation } ></input>
                                <label style={{marginLeft:10,fontSize:10}} >NATIONALITY</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleAdress }></input>
                                <label style={{marginLeft:10,fontSize:10}} >ADDRESS</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="personal-sec">
                            <h5 style={{fontSize:11}}><b>CONTACT DETAILS</b></h5>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleEmail }></input>
                                <label style={{marginLeft:10,fontSize:10}} >EMAIL</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handlePhone }></input>
                                <label style={{marginLeft:10,fontSize:10}} >PHONE NUMBER</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleSkype }></input>
                                <label style={{marginLeft:10,fontSize:10}} >SKYPE</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleWeb }></input>
                                <label style={{marginLeft:10,fontSize:10}} >WEBSITE</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="personal-sec">
                            <h5 style={{fontSize:11}}><b>PROFILE  DETAILS</b></h5>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleLinkdin }></input>
                                <label style={{marginLeft:10,fontSize:10}} >LINKDIN</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleGithub }></input>
                                <label style={{marginLeft:10,fontSize:10}} >GITHUB</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleMedium }></input>
                                <label style={{marginLeft:10,fontSize:10}} >MEDIUM</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleQuara }></input>
                                <label style={{marginLeft:10,fontSize:10}} >QUARA</label>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default sectionTable