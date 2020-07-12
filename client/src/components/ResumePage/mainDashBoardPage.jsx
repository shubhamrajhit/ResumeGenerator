import React, { Component } from 'react'
import Editor from '../Editor/Editor'
import ResumePage from '../ResumePage/ResumePage'

class mainDashBoardPage extends Component {
    state={
        color:null,
        birth:null
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
    render() {
        console.log(this.state.birth)
        return (
            <div>
                <Editor
                 handleColor={this.handleColor}
                 handleBirth={this.handleBirth} 
                  />
                <ResumePage
                color={this.state.color}
                birth={this.state.birth}
                 />
                
            </div>
        )
    }
}
export default mainDashBoardPage