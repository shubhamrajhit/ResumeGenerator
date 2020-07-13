import React, { Component } from 'react'
import Editor from '../Editor/Editor'
import ResumePage from '../ResumePage/ResumePage'

class mainDashBoardPage extends Component {
    state={
        color:null,
        birth:null,
        font:null
    }
    handleColor=(color)=>{
        this.setState({
            color:color
        })
    }
    handleBirth=(e)=>{
        this.setState({
            ...this.state,
            birth:e
        })
    }
    handlefont=(e)=>{
        this.setState({
            ...this.state,
            font:e
        })
    }
    render() {
        console.log(this.state.birth)
        return (
            <div>
                <Editor
                 handleColor={this.handleColor}
                 handleBirth={this.handleBirth} 
                 handlefont={this.handlefont}
                  />
                <ResumePage
                color={this.state.color}
                birth={this.state.birth}
                font={this.state.font}
                 />
                
            </div>
        )
    }
}
export default mainDashBoardPage