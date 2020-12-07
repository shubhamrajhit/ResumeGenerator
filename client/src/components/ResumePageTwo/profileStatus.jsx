import React, { Component } from 'react'

class profileStatus extends Component {
    render() {
        return (
            <div className="profile-status ml-3 mt-5 mb-5" style={{display:this.props.status ?'block':'none'}}>
                <h4 className="mb-3" style={{fontWeight:600,fontFamily:this.props.font}}>PROFILE</h4>
                <p className="describe" style={{color:'#BDC3C7'}}
                contentEditable="true" placeholder="In this text Field you describe your role and try to 
                write something attractive so that recruter can hire you as well  ">                       
            </p>
         </div>
        )
    }
}
export default profileStatus