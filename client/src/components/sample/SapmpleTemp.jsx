import React, { Component } from 'react'
import temp1 from "../../static/img/template1.jpeg";
import temp2 from "../../static/img/template2.jpeg";
import temp3 from "../../static/img/template3.jpeg";
import temp4 from "../../static/img/temp4.jpeg";

class SapmpleTemp extends Component {
    state={

    }
    handleClick=(e)=>{
        this.props.handletempOne(e.target.id)
    }
    render() {
        return (
            <div className="container" id="sampletemp" style={{marginTop:70}}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card"  style={{width:370}} >
                            <img src={temp1}style={{ width:'100%',  backgroundSize:'cover'}} />
                        </div>
                       
                        <a className="hsr" id="TemplateOne"  onClick={this.handleClick}  style={{fontFamily:'palatino'}}>Design Your Template</a>
                    </div>
                    <div className="col-md-4">
                        <div className="card" id="TemplateTwo" style={{width:370}} onClick={this.handleClick} >
                            <img src={temp3} style={{ width:'100%',  backgroundSize:'cover',marginTop:-1,marginLeft:-1,marginBottom:-1}} />
                        </div>
                        <a className="hsr" id="TemplateThree"  onClick={this.handleClick}  style={{fontFamily:'palatino'}}>Design Your Template</a>
                    </div>
                    <div className="col-md-4">
                        <div className="card" id="TemplateThree" style={{width:370}} onClick={this.handleClick} >
                            <img src={temp2}  style={{ width:'100%',  backgroundSize:'cover'}} />
                        </div>
                        <a className="hsr" id="TemplateTwo"  onClick={this.handleClick}  style={{fontFamily:'palatino'}}>Design Your Template</a>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="card" id="TemplateThree" style={{width:370}} onClick={this.handleClick} >
                            <img src={temp4}  style={{ width:'100%',  backgroundSize:'cover'}} />
                        </div>
                        <a className="hsr" id="TemplateForth"  onClick={this.handleClick}  style={{fontFamily:'palatino'}}>Design Your Template</a>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default SapmpleTemp