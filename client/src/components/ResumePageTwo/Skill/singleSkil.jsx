import React, { Component } from 'react'

class singleSkil extends Component {
    state={
        percent:25

    }
    skillClick=()=>{
        this.setState((prevState)=>{
            return {percent: prevState.percent>320 ? prevState.percent-250:prevState.percent+25};    
        });
    }

    render() {
        return (
            <div className="skil-main mt-2">
                <p className="contact-info2"
                        contentEditable="true" placeholder="Enter your Email" style={{
                        color:'#7F8C8D',fontFamily:this.props.font}}></p>
                <div className="skil-part"></div>
                <div className="skil-part2" style={{width:this.state.percent}} onClick={this.skillClick}></div>    
            </div>
        )
    }
}
export default singleSkil