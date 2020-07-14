import React, { Component } from 'react'

class preview extends Component {
    render() {
        return (
            <div className="menu-item">
                <div className="preview ">
                    <i class="fa fa-eye fa-2x" aria-hidden="true" style={{color:'#fff',marginTop:-70}}></i>
                    <span style={{color:'#ddd',fontSize:20,marginLeft:8,marginTop:-70}}>Preview</span>
                </div>
            </div>
        )
    }
}
export default preview