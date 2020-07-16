import React, { Component } from 'react'

class singleSkill extends Component {
    state={
        percent:25

    }
    skillclick=()=>{
        this.setState((prevState)=>{
            return {percent: prevState.percent>99 ? prevState.percent-100:prevState.percent+25};    
        });
    }
    render() {
        return (
           
                <div className="skill " style={{marginTop:60}}>
                    <div className="skill-details">
                        <div className="skill-circle pt-3" style={{textAlign:"center"}} onClick={this.skillclick}>
                            <p style={{fontSize:13}}>{this.state.percent}%</p>
                        </div>
                        <h4 className="position"
                          contentEditable="true" 
                          placeholder="Position" 
                          style={{color:'#BDC3C7',
                                marginBottom:-20,
                                fontFamily:this.props.font,
                                width:280
                                }} >

                    </h4>
                        
                    </div>
                                   
                </div>
         
        )
    }
}
export default singleSkill