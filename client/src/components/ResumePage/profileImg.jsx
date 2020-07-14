import React, { Component } from 'react'
import bgimg from "../../static/img/shu.jpeg";


class profileImg extends Component {
    render() {
        return (
            <div className="imgcontainer ml-3 mt-2">
            <div className="firstLi">
                 <label>
                     <div className="inner-foto mt-5 "
                        style={{
                                backgroundImage: `url(${bgimg})`,
                                backgroundSize: `cover`,
                                
                                }}>
                         <div className="inner-icon-text" >
                             <i class="fa fa-camera fa-2x" aria-hidden="true" style={{color:'#ddd'}}></i>
                                 <label htmlFor="upload-photo" style={{color:'#ddd'}}>Select your img</label>
                                 <input type="file" name="photo" id="upload-photo" />
                         </div>
                     </div>
                 </label>
                
             </div>
             
         </div>
        )
    }
}
export default profileImg