import React, { Component } from 'react'
import Editor from './Editor/Editor'
import TemplateOne from './TemplateOne'
import TemplateTwo from './TemplateTwo'
import TemplateThree from './TemplateThree'
import TemplateForth from './TemplateForth'


class mainDashBoardPage extends Component {
    state={
        color:null,
        font:null,
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
        quara:true,
        shareurl:null
    }
    handleColor=(color)=>{
        this.setState({
            color:color
        })
        this.props.handleMainColor(color)
    }
    handlefont=(e)=>{
        this.setState({
            ...this.state,
            font:e
        })
    }
    handleBirth=(e)=>{
        this.setState({
            ...this.state,
            birth:e
        })
    }
    handleNation=(e)=>{
        this.setState({
            ...this.state,
            nation:e
        })
    }
    handleAddress=(e)=>{
        this.setState({
            ...this.state,
            address:e
        })
    }
    handleStatus=(e)=>{
        this.setState({
            ...this.state,
            status:e
        })
    }
    handleEmail=(e)=>{
        this.setState({
            ...this.state,
            email:e
        })
    }
    handlePhone=(e)=>{
        this.setState({
            ...this.state,
            phone:e
        })
    }
    handleSkype=(e)=>{
        this.setState({
            ...this.state,
            skype:e
        })
    }
    handleWeb=(e)=>{
        this.setState({
            ...this.state,
            web:e
        })
    }
    handleLinkdin=(e)=>{
        this.setState({
            ...this.state,
            linkdin:e
        })
    }
    handleGithub=(e)=>{
        this.setState({
            ...this.state,
            github:e
        })
    }
    handleMedium=(e)=>{
        this.setState({
            ...this.state,
            medium:e
        })
    }
    handleQuara=(e)=>{
        this.setState({
            ...this.state,
            quara:e
        })
    }
    handleshareurl=(url)=>{
        this.setState({
            ...this.state,
            shareurl:url
        })
    }
    
    render() {
        console.log(this.state.birth)
        return (
            <div>
                <Editor
                 handleColor={this.handleColor}
                 handlefont={this.handlefont}
                 handleBirth={this.handleBirth} 
                 handleNation={this.handleNation}
                 handleAddress={this.handleAddress}
                 handleStatus={this.handleStatus}
                 handleEmail={this.handleEmail}
                 handlePhone={this.handlePhone}
                 handleSkype={this.handleSkype}
                 handleWeb={this.handleWeb}
                 handleLinkdin={this.handleLinkdin}
                 handleGithub={this.handleGithub}
                 handleMedium={this.handleMedium}
                 handleQuara={this.handleQuara}
                 handleshareurl={this.handleshareurl}
                 shareurl={this.state.shareurl}
                 
                  />
                  
                {(() => {
                            switch (this.props.name) {
                            case "TemplateOne":   return  <TemplateOne color={this.state.color}
                                                                        font={this.state.font}
                                                                        birth={this.state.birth}
                                                                        nation={this.state.nation}
                                                                        address={this.state.address}
                                                                        status={this.state.status}
                                                                        email={this.state.email}
                                                                        phone={this.state.phone}
                                                                        web={this.state.web}
                                                                        skype={this.state.skype}
                                                                        linkdin={this.state.linkdin}
                                                                        github={this.state.github}
                                                                        medium={this.state.medium}
                                                                        quara={this.state.quara}
                                                            />
                            case "TemplateTwo": return <TemplateTwo color={this.state.color}
                                                                        font={this.state.font}
                                                                        birth={this.state.birth}
                                                                        nation={this.state.nation}
                                                                        address={this.state.address}
                                                                        status={this.state.status}
                                                                        email={this.state.email}
                                                                        phone={this.state.phone}
                                                                        web={this.state.web}
                                                                        skype={this.state.skype}
                                                                        linkdin={this.state.linkdin}
                                                                        github={this.state.github}
                                                                        medium={this.state.medium}
                                                                        quara={this.state.quara}
                                                            />
                            case "TemplateThree":  return  <TemplateThree color={this.state.color}
                                                                        font={this.state.font}
                                                                        birth={this.state.birth}
                                                                        nation={this.state.nation}
                                                                        address={this.state.address}
                                                                        status={this.state.status}
                                                                        email={this.state.email}
                                                                        phone={this.state.phone}
                                                                        web={this.state.web}
                                                                        skype={this.state.skype}
                                                                        linkdin={this.state.linkdin}
                                                                        github={this.state.github}
                                                                        medium={this.state.medium}
                                                                        quara={this.state.quara}
                                                            />
                            case "TemplateForth": return    <TemplateForth color={this.state.color}
                                                                        font={this.state.font}
                                                                        birth={this.state.birth}
                                                                        nation={this.state.nation}
                                                                        address={this.state.address}
                                                                        status={this.state.status}
                                                                        email={this.state.email}
                                                                        phone={this.state.phone}
                                                                        web={this.state.web}
                                                                        skype={this.state.skype}
                                                                        linkdin={this.state.linkdin}
                                                                        github={this.state.github}
                                                                        medium={this.state.medium}
                                                                        quara={this.state.quara}
                                                                    />
                            default:      return null
                            }
                        })()}
               
                
            </div>
        )
    }
}
export default mainDashBoardPage