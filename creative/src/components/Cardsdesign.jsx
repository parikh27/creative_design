import React from "react";
import "./Cardsdesign.scss";
import img1 from "./images/logo.png";
import img2 from "./images/success.png";

function Cardsdesign(props) {
  return (
    <div>
      <div class="main_card_wrapper">
        <div class="card_titles_wrapper">
          <div class="company_logo_img">
            <div class="company_logo_img_1">
              <img src={img1}></img>
            </div>
          </div>
          <div class="pricing_plan_head">
            <h2>Pricing Plan</h2>
          </div>
          <div class="pricing_plan_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="pricing_plan_buttons">
            <div class="radio-inputs">
              <label class="radio">
                <input type="radio" name="radio" id="radio_1" checked=" " />
                <span for="radio_1" class="name">
                  Monthly
                </span>
              </label>
              <label class="radio">
                <input type="radio" name="radio" for="radio_2" />
                <span for="radio_2" class="name">
                  Yearly
                </span>
              </label>
            </div>
          </div>
        </div>
      
      <div class="card_pricing_wrapper">
        <div class="card_pricing">
          <div class="plan_1">
            <p>Basic plan</p>
          </div>
          <div class="plan_1_text">
            <p>Lorem ipsum dolor sit amet.</p>
            <div class="line_1"></div>
            <div class="pricing_1">
              <p class="pricing_1_main">
                $19<span> / mo</span>
              </p>
              <p class="pricing_1_main_year">or $199 yearly</p>
            </div>
            <div class="pricing_button">
              <a href="https://www.youtube.com/" target=" ">
                <button class="price_button">Get started</button>
              </a>
            </div>
            <div class="line_2"></div>
            <div class="pricing_features">
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon very soon very good soon very okay</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card_pricing">
          <div class="plan_1">
            <p>Business Plan</p>
          </div>
          <div class="plan_1_text">
            <p>Lorem ipsum dolor sit amet.</p>
            <div class="line_1"></div>
            <div class="pricing_1">
              <p class="pricing_1_main">
                $29<span> / mo</span>
              </p>
              <p class="pricing_1_main_year">or $299 yearly</p>
            </div>
            <div class="pricing_button">
              <a href="https://www.youtube.com/" target=" ">
                <button class="price_button">Get started</button>
              </a>
            </div>
            <div class="line_2"></div>
            <div class="pricing_features">
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card_pricing">
          <div class="plan_1">
            <p>Enterprise Plan</p>
          </div>
          <div class="plan_1_text">
            <p>Lorem ipsum dolor sit amet.</p>
            <div class="line_1"></div>
            <div class="pricing_1">
              <p class="pricing_1_main">
                $49<span> / mo</span>
              </p>
              <p class="pricing_1_main_year">or $399 yearly</p>
            </div>
            <div class="pricing_button">
              <a href="https://www.youtube.com/" target=" ">
                <button class="price_button">Get started</button>
              </a>
            </div>
            <div class="line_2"></div>
            <div class="pricing_features">
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
              <div class="features">
                <div class="feature_tick">
                  <img src={img2}></img>
                </div>
                <div class="feature_text">
                  <p>Features texture soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cardsdesign;
