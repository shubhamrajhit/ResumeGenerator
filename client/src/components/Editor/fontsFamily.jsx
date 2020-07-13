import React, { Component } from 'react'

class fontsFamily extends Component {
    state={
        textFont:null
    }

    handleChange=(e)=>{
        var lang =e.target.value;
        this.props.handlefont(lang)
    }
    render() {
        return (
            <div>
                <div className="mt-2 ml-2 ">
                <select id="input-font" value={this.state.selected}  onChange={this.handleChange}>
                    <option value="Arial">Arial</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Sans serif">Sans serif</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Palatino">Palatino</option>
                    <option value="Garamond">Garamond</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                    <option value="Arial Black">Arial Black</option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                </select>
        
            </div>
            <div style={{fontSize:17,marginTop:7 ,color:'#ddd'}}>Font Family</div>
        </div>
        )
    }
}
export default fontsFamily