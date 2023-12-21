import React from 'react';
import "./app.css"
import Buttonsdesign from './components/Buttonsdesign/Buttonsdesign';
import Radiobuttonsdesign from './components/Radiobuttonsdesign/Radiobuttonsdesign';

function App(props) {
  return (
    <div class="wrapper">
    <div class="Custom_design">
      <Buttonsdesign></Buttonsdesign>
    </div>
    <div class="Radio_buttons">
      <Radiobuttonsdesign></Radiobuttonsdesign>
    </div>
    </div>

  );
  
}


export default App;


