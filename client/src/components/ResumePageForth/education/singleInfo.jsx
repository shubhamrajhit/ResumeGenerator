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
                <div className="resume4">
                    <div className="resume-details4">
                    <h6 className="mi-resume-year float-left" contentEditable="true" placeholder="Year" style={{color:'#BDC3C7',marginTop:3,fontFamily:this.props.font,marginLeft:-125,width:90}}></h6>
                        <h4 className="degree"  contentEditable="true" placeholder="Degree" style={{color:'#000',fontFamily:this.props.font}} autocorrect="off" ></h4>
                        <h6 className="school ml-1 " contentEditable="true" placeholder="School /college/university" style={{color:'#BDC3C7',fontFamily:this.props.font}} autocorrect="off" ></h6>              
                    </div>
                                    
                </div> 
            </div>
        )
    }
}
export default singleInfo