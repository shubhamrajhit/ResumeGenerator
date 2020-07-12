import React, { Component } from 'react'

class downPrev extends Component {
    render() {
        return (
            <div>
                    <div className="menu-item">
                        <div className="preview">
                            <i class="fa fa-eye fa-2x" aria-hidden="true" style={{color:'#fff'}}></i>
                            <span style={{color:'#ddd',fontSize:20,marginLeft:8}}>Preview</span>
                        </div>
                    </div>
                   
                    <div className="menu-item download" style={{backgroundColor:'blue'}}>
                        <i class="fa fa-download fa-2x" aria-hidden="true" style={{color:'#fff'}}></i>
                        <span style={{color:'#ddd',marginLeft:10}}>DOWNLOAD PDF</span>
                    </div>

               
                </div>
                
        
        )
    }
}
export default downPrev
