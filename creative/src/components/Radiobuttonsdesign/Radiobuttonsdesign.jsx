import React from "react";
import "./Radiobuttonsdesign.scss";

function Radiobuttonsdesign(props) {
  return (
    <div class="Radiobutton_wrapper">
      <div class="radiobuttons_design">
        <h2>Radio buttons</h2>
      </div>
      <div class="Radiobuttons_design">
        {/* Radiobutton_design_1 */}
        <div class="radiobutton_wrapper_1">
          <div class="Radiobutton_design_1">
            <section class="radio_section_1">
              <div class="radio_list_1">
                <h1>Which Social Media you Often use?</h1>
                <div class="radio_item_1">
                  <input name="radio" id="radio_1" type="radio" />
                  <label for="radio_1">INSTAGRAM</label>
                </div>
                <div class="radio_item_1">
                  <input name="radio" id="radio_2" type="radio" />
                  <label for="radio_2">TWITTER</label>
                </div>
                <div class="radio_item_1">
                  <input name="radio" id="radio_3" type="radio" />
                  <label for="radio_3">LINKEDIN</label>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Radiobutton_design_2 */}
        <div class="radiobutton_wrapper_1">
          <div class="Radiobutton_design_2">
            <div class="radio_input_2">
              <h5>Gender</h5>
              <input
                value="value-1"
                name="value-radio"
                id="value-1"
                type="radio"
              />
              <label for="value-1">Male</label>
              <input
                value="value-2"
                name="value-radio"
                id="value-2"
                type="radio"
              />
              <label for="value-2">Female</label>
              <input
                value="value-3"
                name="value-radio"
                id="value-3"
                type="radio"
              />
              <label for="value-3">Transgender</label>
            </div>
          </div>
        </div>

        {/* Radiobutton_design_3 */}
        <div class="radiobutton_wrapper_1">
          <div class="Radiobutton_design_3">
            <div class="radiobutton_3-container">
              <div class="radiobutton_3">
                <input
                  type="radio"
                  class="radiobutton_3__input"
                  id="radio1"
                  name="radio-group"
                />
                <label class="radiobutton_3__label" for="radio1">
                  <span class="radiobutton_3__custom"></span>
                  Yes
                </label>
              </div>
              <div class="radiobutton_3">
                <input
                  type="radio"
                  class="radiobutton_3__input"
                  id="radio2"
                  name="radio-group"
                />
                <label class="radiobutton_3__label" for="radio2">
                  <span class="radiobutton_3__custom"></span>
                  No
                </label>
              </div>
              <div class="radiobutton_3">
                <input
                  type="radio"
                  class="radiobutton_3__input"
                  id="radio3"
                  name="radio-group"
                />
                <label class="radiobutton_3__label" for="radio3">
                  <span class="radiobutton_3__custom"></span>
                  Not sure
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Radiobutton_design_4 */}
        <div class="radiobutton_wrapper_1">
          <div class="Radiobutton_design_4">
            <div class="radiobutton_4">
              <label>
                <input
                  value="value_1"
                  name="value_radio"
                  id="value_1"
                  type="radio"
                />
                <span>Average</span>
              </label>
              <label>
                <input
                  value="value_2"
                  name="value_radio"
                  id="value_2"
                  type="radio"
                />
                <span>Fair</span>
              </label>
              <label>
                <input
                  value="value_3"
                  name="value_radio"
                  id="value_3"
                  type="radio"
                />
                <span>Good</span>
              </label>
              <label>
                <input
                  value="value_4"
                  name="value_radio"
                  id="value_4"
                  type="radio"
                />
                <span>Excellent</span>
              </label>
              <span class="selection"></span>
            </div>
          </div>
        </div>

        {/* Radiobutton_design_5 */}
        <div class="radiobutton_wrapper_1">
          <div class="Radiobutton_design_5">
            <form class="form">
              <label for="01">Card</label>
              <input id="01" type="radio" name="r" value="1" />
              <label for="02">Cash</label>
              <input id="02" type="radio" name="r" value="2" />
              <label for="03">GPay</label>
              <input id="03" type="radio" name="r" value="3" />
            </form>
          </div>
        </div>

        {/* Radiobutton_design_6 */}
        <div class="radiobutton_wrapper_1">
          <div class="Radiobutton_design_6">
            <div class="radiobutton_6">
              <input name="radiobutton_6" id="one" type="radio" />
              <label for="one" class="radiobutton_6__label">
                True
              </label>
              <input name="radiobutton_6" id="two" type="radio" />
              <label for="two" class="radiobutton_6__label">
                False
              </label>
              <input name="radiobutton_6" id="three" type="radio" />
              <label for="three" class="radiobutton_6__label">
                None
              </label>
              <div class="radiobutton_6__indicator" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Radiobuttonsdesign;
