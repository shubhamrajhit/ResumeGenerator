import React, { Component } from 'react'
import { SketchPicker } from 'react-color';

class color extends Component {
    state={
        isdisplay:false,
        background:'green'
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        this.props.handleColor(this.state.background)
      };
    handleclick=()=>{
        this.setState((prevState)=>{
            return {isdisplay: !prevState.isdisplay};    
        });
    }
    render() {
       
        return (
            <div>
                <div className="color-pick">
                    <div  className="avatar" style={{backgroundColor:this.state.background}} onClick={this.handleclick} id="rgb(255, 0, 0)"></div>   
                </div>
                {this.state.isdisplay ?
                    <SketchPicker
                    color={ this.state.background }
                    onChangeComplete={ this.handleChangeComplete }
                /> :null}
            </div>
        )
    }
}
export default color