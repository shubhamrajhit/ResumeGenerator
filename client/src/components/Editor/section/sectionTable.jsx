import React, { Component } from 'react'

class sectionTable extends Component {
    state={
        birth:true,
        address:null
    }
    handleBirth=()=>{
        this.setState((prevState)=>{
            return {birth: !prevState.birth};    
        });
        this.props.handleBirth(this.state.birth)
    }
    render() {
        // const final=this.state.birth ? checked :null
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="personal-sec">
                            <h5 style={{fontSize:11}}><b>PERSONAL DETAILS</b></h5>
                            <div className="birth">
                                <input type="checkbox" checked={!this.state.birth} onChange={ this.handleBirth }   ></input>
                                <label style={{marginLeft:10,fontSize:10}} >BIRTH DATE</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >NATIONALITY</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >ADDRESS</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >STATUS</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="personal-sec">
                            <h5 style={{fontSize:11}}><b>CONTACT DETAILS</b></h5>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >EMAIL</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >PHONE NUMBER</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >SKYPE</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >WEBSITE</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="personal-sec">
                            <h5 style={{fontSize:11}}><b>PROFILE  DETAILS</b></h5>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >LINKDIN</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >GITHUB</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >MEDIUM</label>
                            </div>
                            <div className="birth">
                                <input type="checkbox" onChange={ this.handleItalic }></input>
                                <label style={{marginLeft:10,fontSize:10}} >QUARA</label>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default sectionTable