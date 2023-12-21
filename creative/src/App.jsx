import React from 'react';
import "./app.css"
import Buttonsdesign from './components/Buttonsdesign/Buttonsdesign';
import Radiobuttonsdesign from './components/Radiobuttonsdesign/Radiobuttonsdesign';
import Checkboxdesign from './components/Checkboxdesign/Checkboxdesign';

function App(props) {
  return (
    <div class="wrapper">
    <div class="Custom_design">
      <Buttonsdesign></Buttonsdesign>
    </div>
    <div class="Radio_buttons">
      <Radiobuttonsdesign></Radiobuttonsdesign>
    </div>
    <div class="Checkboxes">
      <Checkboxdesign></Checkboxdesign>
    </div>
    </div>

  );
  
}


export default App;


