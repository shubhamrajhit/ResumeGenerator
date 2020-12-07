import React, { Component } from 'react'
import SingleSkil from './singleSkil'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default class skil extends Component {
    state={
        users: [],
        count:0,
        visible:false
    }
    addUser = () => {
        this.setState({
          users: [...this.state.users, <SingleSkil font={this.props.font} />],
          count:this.state.count+1
         
        })
      }
      removeUser=(e)=>{
          var i=0
        const filteredItems = this.state.users.slice(0, i).concat(this.state.users.slice(i + 1, this.state.users.length))
            this.setState({
                users: filteredItems
              })
      }
      onHover=()=>{
        this.setState((prevState)=>{
            return {visible: !prevState.visible};    
        });
     }
    render() {
        const {users}=this.state
        return (
            <div className="resume-apper skil">
             <div  className="iconsize" style={{marginLeft:-70}}><i class="fa fa-lightbulb-o" aria-hidden="true" style={{color:'#fff'}}></i></div>
                <span className="mb-1" style={{fontWeight:600,fontFamily:this.props.font,marginLeft:10,fontSize:'25px'}}>SKILL</span>
                <hr />

                <div className="skil-mainbig " onMouseOver={this.onHover} >
                    {users.map((user,index)=>{
                        return(
                            user
                        )
                    })}
                    <SingleSkil font={this.props.font} />
                </div>
                {this.state.visible ?
                    <Tooltip title="Add" aria-label="add" className="float-right" style={{marginTop:-80}}>
                    <Fab color="#000" onClick={this.addUser} style={{width:'35px',height:'25px',marginRight:20}} >
                        <AddIcon />
                    </Fab>
                    </Tooltip> 
                    :null}
                   
            {this.state.visible ?
                    <Tooltip title="Remove" aria-label="remove" className="float-right">
                    <Fab color={this.props.color} onClick={this.removeUser} style={{width:'35px',height:'25px'}} >
                        <DeleteIcon style={{width:'20px'}} />
                    </Fab>
                    </Tooltip> 
                    :null}   
               
            </div>
        )
    }
}
