import React, { Component } from 'react'
import SingleSkill from './singleSkill'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class skill extends Component {
    state = {
        users: [],
        count:0,
        visible:false
      }
    
      addUser = () => {
        this.setState({
          users: [...this.state.users, <SingleSkill font={this.props.font} />],
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
            <div className="mt-5">
              <div className="skill-wrapper" onMouseOver={this.onHover}  >
                  {users.map((user,index)=>{
                      return(
                          user
                      )
                  })}
                  <SingleSkill font={this.props.font} />
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
export default skill