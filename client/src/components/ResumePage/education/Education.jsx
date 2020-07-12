import React, { Component } from 'react'
import SingleInfo from './singleInfo'

class Education extends Component {
    state = {
        users: [],
        count:0
      }
    
      addUser = () => {
        this.setState({
          users: [...this.state.users, <SingleInfo />],
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
    render() {
        const {users}=this.state
        return (
            <div className="mt-5">
               <h4 className="mb-1" style={{fontWeight:600}}>EDUCATION</h4>
               <button onClick={this.addUser}>Add User</button>
            <button onClick={this.removeUser}>remove User</button>   
            
            <div className="resume-wrapper">
                {users.map((user,index)=>{
                    return(
                        user
                    )
                })}
                <SingleInfo />
            </div>  
            </div>
        )
    }
}
export default Education