import React, { Component } from 'react'

class singleSkil extends Component {
    state={
        percent:100

    }
    skillClick=()=>{
        this.setState((prevState)=>{
            return {percent: prevState.percent>720 ? prevState.percent-250:prevState.percent+60};    
        });
    }

    render() {
        return (
            <div className="skil-main-3 mt-2 ml-5">
                <p className="contact-info2"
                        contentEditable="true" placeholder="skill" style={{
                        color:'#7F8C8D',fontFamily:this.props.font}}></p>
                <div className="skil-part"></div>
                <div className="skil-part2" style={{width:this.state.percent}} onClick={this.skillClick}></div>    
            </div>
        )
    }
}
export default singleSkil