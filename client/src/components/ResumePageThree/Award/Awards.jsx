import React, { Component } from 'react'
import SingleAwards from './SingleAward'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


 class Awards extends Component {
    state = {
        users: [],
        count:0,
        visible:false
      }
    
      addUser = () => {
        this.setState({
          users: [...this.state.users, <SingleAwards font={this.props.font}  />],
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
            <div className="resume-rapper" onMouseOver={this.onHover} >
                <div  className="iconsize" style={{marginLeft:-20}}><i class="fa fa-trophy" aria-hidden="true" style={{color:'#fff'}}></i></div>
                <span className="mb-1" style={{fontWeight:600,fontFamily:this.props.font,marginLeft:10,fontSize:'25px'}}>AWARDS AND ACHIEVEMENTS</span>
               
               
                <SingleAwards addUser={this.addUser} font={this.props.font} />
                {users.map((user,index)=>{
                    return(
                        user
                    )
                })}
            </div>
                   
            {this.state.visible ?
                    <Tooltip title="Add" aria-label="add" className="float-right" style={{marginTop:-50}}>
                    <Fab color="primary" onClick={this.removeUser} style={{width:'35px',height:'25px'}} >
                        <DeleteIcon  />
                    </Fab>
                    </Tooltip> 
                    :null}   
            {this.state.visible ?
                    <Tooltip title="Add" aria-label="add" className="float-right" style={{marginTop:-50,marginLeft:200}}>
                    <Fab color="primary" onClick={this.addUser} style={{width:'35px',height:'25px'}} >
                        <AddIcon />
                    </Fab>
                    </Tooltip> 
                    :null}     
            </div>
        )
    }
}
export default Awards