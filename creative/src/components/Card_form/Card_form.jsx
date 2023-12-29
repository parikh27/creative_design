import React from "react";
import "./Card_form.scss";
import img1 from "../../assets/images/product.png";
import img2 from "../../assets/images/thumb.png";

function Card_form(props) {
  return (
    <div class="main_form_card_sec">
      <div class="Card_form_sec">
        <div class="card_sec">
          <div class="product_image">
            <img src={img1}></img>
          </div>
          <div class="product_name">
            <h2 class="product_head">Golden Xolo Watch</h2>
          </div>
          <div class="product_description">
            <a href="#">
              <p class="product_info">
                Golden Men Xolo Wrist analogue Quartz watch model water resistance
                good quality
              </p>
            </a>
          </div>
          <div class="product_ratings">
            Ratings
            <div class="rating">
              <input value="5" name="rate" id="star5" type="radio" />
              <label title="text" for="star5"></label>
              <input value="4" name="rate" id="star4" type="radio" />
              <label title="text" for="star4"></label>
              <input value="3" name="rate" id="star3" type="radio" checked="" />
              <label title="text" for="star3"></label>
              <input value="2" name="rate" id="star2" type="radio" />
              <label title="text" for="star2"></label>
              <input value="1" name="rate" id="star1" type="radio" />
              <label title="text" for="star1"></label>
            </div>
          </div>
          <div class="product_price">
            <h4>
              <sup>$</sup> 250 <sup>00</sup>
            </h4>
          </div>
          <div class="button_product_wrapper">
           <div class="add_cart">
            <button class="add_to_cart">Add to cart</button>
            </div>
            <div class="like">
            <button class="like_button">like me
              <img src={img2}></img>
            </button>
            </div>

          </div>
        </div>
        <div class="form_sec">

            <div class="input_a">
                <div class="label_1">
                    <label>Image</label>
                </div>
                <div class="input_1">
                <input type="image" class="input_img" alt="image"></input>
                </div>
            </div>
            <div class="input_a">
                <div class="label_1">
                <label for="input_name">Product name</label>
                </div>
                <div class="input_1">
                <input class="input_name" type="text"placeholder="Product name"></input>
                </div>
            </div>
            <div class="input_a">
                <div class="label_1">
                <label  for="product_info">Product description</label>
                </div>
                <div class="input_1">
                <input class="product_info" type="text"placeholder="Product description"></input>
                </div>
            </div>
            <div class="input_a">
                <div class="label_1">
                <label for="input_ratings_a">Ratings</label>
                </div>
                <div class="input_1">
                <input class="input_ratings_a" type="number" placeholder="Ratings"></input>
                </div>
            </div>
            <div class="input_a">
                <div class="label_1">
                <label for="input_product_price">Product price</label>
                </div>
                <div class="input_1">
                <input class="input_product_price" type="number" placeholder="Product Price"></input>
                </div>
            </div>
            <div class="data_button_wrapper">
            <div class="submit_button">
                <button class="submit" type="button">Submit</button>
            </div>
            <div class="reset_button">
                <button class="reset" type="button">Reset</button>
            </div>
            
            </div>
            </div>
        </div>
</div>
  );
  }

export default Card_form;
