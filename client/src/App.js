import React ,{ Component } from 'react';
import Home from './components/home/Home'

import './App.css';
import MainDashBoardPage from './components/mainDashBoardPage'
class App extends Component {
    state={
      color:'#000',
      name:null
    }

  handleMainColor=(e)=>{
   this.setState({
     color:e
   })
   

  }
   handleTemp=(name)=>{
    this.setState({
      name:name
    })

  }
  render(){
  console.log(this.state.name)
  return (
    <div id="App" style={{backgroundColor:this.state.color}}>
      {this.state.name ? <MainDashBoardPage name={this.state.name} handleMainColor={this.handleMainColor}  />:<Home handleTemp={this.handleTemp}  />}
        
      {/* <MainDashBoardPage /> */}
      
    </div>
  );
}
}

export default App;
