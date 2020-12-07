import React, { Component } from 'react'

class singleSkil extends Component {
    state={
        percent:50

    }
    skillClick=()=>{
        this.setState((prevState)=>{
            return {percent: prevState.percent>255 ? prevState.percent-229:prevState.percent+10};    
        });
    }

    render() {
        const score =this.state.percent >240 ?"Excellent":this.state.percent>210 ?"veryGood":"Good"
        return (
            <div className="skil-main-4" style={{marginLeft:-60,marginTop:-30}}>
                <p className="contact-info2"
                        contentEditable="true" placeholder="skill" style={{
                        color:'#7F8C8D',fontFamily:this.props.font}}></p>
                <div className="skil-part"></div>
                <div className="skil-part2" style={{width:this.state.percent}} onClick={this.skillClick}></div> 
                <p className="" style={{marginLeft:190 }}>{score}</p>   
            </div>
        )
    }
}
export default singleSkil