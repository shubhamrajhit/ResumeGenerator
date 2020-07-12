import React, { Component } from 'react'

class profileImg extends Component {
    render() {
        return (
            <div className="imgcontainer ml-3">
            <div className="firstLi">
                 <label>
                     <div className="inner-foto mt-5 ">
                         <div className="inner-icon-text">
                             <i class="fa fa-camera fa-2x" aria-hidden="true"></i>
                                 <label htmlFor="upload-photo">Select your img</label>
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