import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardsdesign from './components/Cardsdesign'
import Buttonsdesign from './components/Buttonsdesign/Buttonsdesign';
import Radiobuttonsdesign from './components/Radiobuttonsdesign/Radiobuttonsdesign';



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    
    <div class="wrapper">
      <div class="Card-section">
      <Cardsdesign></Cardsdesign>
    
    </div>
    <div class="Custom_design">
      <Buttonsdesign></Buttonsdesign>
    </div>
    <div class="Radio_buttons">
      <Radiobuttonsdesign></Radiobuttonsdesign>
    </div>
    </div>
   </div>
     
  )

}
  


export default App;


