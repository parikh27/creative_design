import React from 'react';
import "./app.css"
import CustomCard from './components/CustomCard/CustomCard';
import Customgridlayout from './components/Customgridlayout/Customgridlayout';
import Buttonsdesign from './components/Buttonsdesign/Buttonsdesign';

function App(props) {
  return (
    <div class="wrapper">
      <CustomCard></CustomCard>
    <div class="text">
      <Customgridlayout></Customgridlayout>
      <Buttonsdesign></Buttonsdesign>
    </div>
    </div>

  );
  
}


export default App;


