import React, { Component } from 'react'
import DownPrev from './downPrev'
import Color from './color'
import FontsFamily from './fontsFamily'
import FontsSize from './fontsSize'
import SectionForm from './section/SectionForm'
import Pages from './Pages'
import PreviewModal from './PreviewModal'

class Editor extends Component {
    state={
        color:null,

    }
    handleColor=(e)=>{
       this.props.handleColor(e)
    }
    handlefont=(e)=>{
        this.props.handlefont(e)
    }

    handleBirth=(e)=>{
        this.props.handleBirth(e)
    }
     handleNation=(e)=>{
        this.props.handleNation(e)
      }  
       handleAddress=(e)=>{
        this.props.handleAddress(e)
      }  
       handleStatus=(e)=>{
        this.props.handleStatus(e)
      }  
       handleEmail=(e)=>{
        this.props.handleEmail(e)
      }  
       handlePhone=(e)=>{
        this.props.handlePhone(e)
      }  
       handleSkype=(e)=>{
        this.props.handleSkype(e)
      }  
       handleWeb=(e)=>{
        this.props.handleWeb(e)
      }  
       handleLinkdin=(e)=>{
        this.props.handleLinkdin(e)
      }  
       handleGithub=(e)=>{
        this.props.handleGithub(e)
      }  
       handleMedium=(e)=>{
        this.props.handleMedium(e)
      }  
       handleQuara=(e)=>{
        this.props.handleQuara(e)
      } 
      handleshareurl=(url)=>{
        this.props.handleshareurl(url)
    } 
    
    render() {
        return (
            <div className="menu mt-5 " style={{marginLeft:300}}>
                <div className="menu-cover fixed-top " style={{marginTop:0,width:'80%',marginLeft:150}}>
                    <div className="menu-item">
                        <Pages />
                    </div>
                    <div className="menu-item">
                        <FontsFamily handlefont={this.handlefont} />
                    </div>
                    <div className="menu-item">
                        <FontsSize />
                    </div>
                    <div className="menu-item">
                        <SectionForm 
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
                        />    
                    </div>
                    <div className="menu-item">
                    <Color handleColor={this.handleColor} />
                    </div>
                    <div className="menu-item ml-5 " style={{marginTop:-40}}>
                    <PreviewModal
                     handleshareurl={this.handleshareurl}
                     shareurl={this.props.shareurl} />
                </div>
                </div>
               
            </div>
        )
    }
}
export default Editor