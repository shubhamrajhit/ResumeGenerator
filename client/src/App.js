import React ,{useState} from 'react';
import './App.css';
import MainDashBoardPage from './components/ResumePage/mainDashBoardPage'
import color from './components/Editor/color';
function App() {
  const [color, setColor] = useState(
    ""
  )

  function handleMainColor(e){
    setColor({
      color:e
    })
   

  }
  console.log(color)
  
  return (
    <div className="App" style={{backgroundColor:color.color}}>
        <MainDashBoardPage handleMainColor={handleMainColor} />
      
      
    </div>
  );
}

export default App;
