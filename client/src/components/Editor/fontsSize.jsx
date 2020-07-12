import React, { Component } from 'react'

class fontsSize extends Component {
    render() {
        return (
            <div className="fontSizeN"> 
                <div className="fontNav" style={{fontSize:'20px',color:'#fff'}} id="18px" onClick={this.handlechange}  >A</div>
                <div className="fontNav" style={{fontSize:'32px',color:'#fff'}} id="24px" onClick={this.handlechange}  >A</div>
                <div className="fontNav" style={{fontSize:'44px',color:'#fff'}} id="30px" onClick={this.handlechange}  >A</div>
                <div style={{fontSize:17,marginTop:-5,color:'#ddd'}}>TextSize</div>
            </div>
        )
    }
}
export default fontsSize