import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



 class singleInfo extends Component {
     state={
        visible:false
     }
    
    render() {
        return (
            <div>
                <div className="resume mt-5">
                    <div className="resume-summary">                      
                    </div>
                    <div className="resume-details">
                        <h4 className="degree"  contentEditable="true" placeholder="Degree" style={{color:'#BDC3C7',fontFamily:this.props.font}} ></h4>
                        <h6 className="school " contentEditable="true" placeholder="School" style={{color:'#BDC3C7',fontFamily:this.props.font}}></h6>              
                    </div>
                                    
                </div> 
            </div>
        )
    }
}
export default singleInfo