import React, { Component } from 'react'

class profileStatus extends Component {
    render() {
        return (
            <div className="profile-status4 ml-4 mt-4 mb-3" style={{display:this.props.status ?'block':'none'}}>
                <p className="describe" style={{color:'#BDC3C7'}}
                contentEditable="true" placeholder="In this text Field you describe your role and try to 
                write something attractive so that recruter can hire you as well ,
                Here you describe your old job and position skill in which you are much confident eg-your are perfect web developer or data anaylist  ">                       
            </p>
         </div>
        )
    }
}
export default profileStatus