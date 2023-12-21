import React from "react";
import "./Checkboxdesign.scss";

function Checkboxdesign(props) {
  return (
    <div class="Checkbox_wrapper">
      <div class="Checkbox_content">
        <div class="Checkbox">
          <h2>Checkbox</h2>
        </div>
        <div class="Checkbox_design">
          {/* Checkbox_design_1 */}
          <div class="checkbox_wrapper_1">
            <div class="Checkbox_design_1">
              <label class="checkbox_1" for="checkbox_1_a">
                <input type="checkbox" id="checkbox_1_a" />
                <div class="checkmark"></div>
                GYM
              </label>
              <label class="checkbox_1" for="checkbox_2_a">
                <input type="checkbox" id="checkbox_2_a" />
                <div class="checkmark"></div>
                Private Parking
              </label>
            </div>
          </div>

          {/* Checkbox_design_2 */}
          <div class="checkbox_wrapper_1">
            <div class="Checkbox_design_2">
              <div class="checkbox_div_1">
                <div class="center">
                  <input name="" type="checkbox" id="checkbox_2" />
                  <label class="checkbox_2" for="checkbox_2">
                    Lorem, ipsum dolor.
                  </label>
                </div>
                <div class="center">
                  <input name="" type="checkbox" id="checkbox_2_b" />
                  <label class="checkbox_2" for="checkbox_2_b">
                    Lorem, ipsum dolor.
                  </label>
                </div>
                <div class="center">
                  <input name="" type="checkbox" id="checkbox_2_b1" />
                  <label class="checkbox_2" for="checkbox_2_b1">
                    Lorem, ipsum dolor.
                  </label>
                </div>
              </div>
              <div class="checkbox_div_2">
                <div class="center">
                  <input name="" type="checkbox" id="checkbox_2_b2" />
                  <label class="checkbox_2" for="checkbox_2_b2">
                    Lorem, ipsum dolor.
                  </label>
                </div>
                <div class="center">
                  <input name="" type="checkbox" id="checkbox_2_b3" />
                  <label class="checkbox_2" for="checkbox_2_b3">
                    Lorem, ipsum dolor.
                  </label>
                </div>
                <div class="center">
                  <input name="" type="checkbox" id="checkbox_2_b4" />
                  <label class="checkbox_2" for="checkbox_2_b4">
                    Lorem, ipsum dolor.
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox_design_3 */}
          <div class="checkbox_wrapper_1">
            <div class="Checkbox_design_3">
              <div class="checkbox_3">
                <input class="checkbox" type="checkbox" id="checbox_3_c" />
                <label for="checkbox_3_c">Public</label>
              </div>
            </div>
          </div>

          {/* Checkbox_design_4 */}
          <div class="checkbox_wrapper_1">
            <div class="Checkbox_design_4">
              <label class="checkbox_4" for="checkbox_4-c">
                <input type="checkbox"  id="checkbox_4_c" />
             Private </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkboxdesign;
