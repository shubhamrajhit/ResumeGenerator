import React, { Component } from 'react'
import bgimg from "../../static/img/shu.jpeg";
import ProfileModal from './ProfileModal'


class profileImg extends Component {
    state={
        filePath:null

    }
    ownImgUrl=(e)=>{
        this.setState({
            filePath:e.filePath

        })
    }
    render() {
        console.log(this.state.filePath)
        return (
            <div className="imgcontainer ml-3 mt-3">
            <div className="firstLi">
                 <label>
                     <div className="inner-foto mt-5 "
                        style={{
                                backgroundImage: `url(${this.state.filePath})`,
                                backgroundSize: `cover`,
                                
                                }}>
                         <div className="inner-icon-text" >
                               {this.state.filePath ?null:
                                <ProfileModal ownImgUrl={this.ownImgUrl} />}
                                
                         </div>
                        
                     </div>
                 </label>
                
             </div>
             
         </div>
        )
    }
}
export default profileImg