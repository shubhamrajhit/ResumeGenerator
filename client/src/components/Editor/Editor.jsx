import React, { Component } from 'react'
import DownPrev from './downPrev'
import Color from './color'
import FontsFamily from './fontsFamily'
import FontsSize from './fontsSize'
import SectionForm from './section/SectionForm'
import Pages from './Pages'

class Editor extends Component {
    state={
        color:null
    }
    handleColor=(e)=>{
       this.props.handleColor(e)
    }
    handleBirth=(e)=>{
        this.props.handleBirth(e)
    }
    render() {
        return (
            <div className="menu mt-5" style={{marginLeft:170}}>
                <div className="menu-cover">
                    <div className="menu-item">
                        <Pages />
                    </div>
                    <div className="menu-item">
                        <FontsFamily />
                    </div>
                    <div className="menu-item">
                        <FontsSize />
                    </div>
                    <div className="menu-item">
                        <SectionForm 
                            handleBirth={this.handleBirth}
                        />    
                    </div>
                    <div className="menu-item">
                    <Color handleColor={this.handleColor} />
                    </div>
                </div>
                <div className="menu-cover ml-5">
                    <DownPrev />
                </div>
            </div>
        )
    }
}
export default Editor