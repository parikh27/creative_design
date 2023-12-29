import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cardsdesign from "./components/Cardsdesign/Cardsdesign";
import Buttonsdesign from "./components/Buttonsdesign/Buttonsdesign";
import Radiobuttonsdesign from "./components/Radiobuttonsdesign/Radiobuttonsdesign";
import Card_form from "./components/Card_form/Card_form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div class="wrapper">
       
        <div class="Custom_design">
          <Buttonsdesign></Buttonsdesign>
        </div>
        <div class="Radio_buttons">
          <Radiobuttonsdesign></Radiobuttonsdesign>
        </div>

        <div class="Card-section">
          <Cardsdesign></Cardsdesign>
        </div>

        <div class="Card_form">
          <Card_form></Card_form>
        </div>
      </div>
    </div>
  );
}

export default App;
