import React from 'react';
import "./CustomCard.scss"

function CustomCard(props) {
    return (
       <div class="card_sec">
        <div class="card_1">
            <div class="head">
                <h3>Welcoming you</h3>
            </div>
            <div class="text_body">
            <p>Lorem ipsum,dolor sit amet consectetur adipisicing elit. Perspiciatis iste culpa quasi dicta dolores saepe sapiente deserunt tempora dignissimos totam.</p>
            </div>
            <div class="card_button">
                <button class="card_but">Eplore more</button>
            </div>
        </div>
       </div>
    );
}

export default CustomCard;