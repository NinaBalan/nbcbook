import React from "react";
import "../style/slider";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from "../../static/assets/sliderImg/biscuiti.jpg";
import image2 from "../../static/assets/sliderImg/img1.jpg";
import image3 from "../../static/assets/sliderImg/chesecake.jpg";
import image4 from "../../static/assets/sliderImg/img2.jpg";
import image5 from "../../static/assets/sliderImg/img4.jpg";

function Slider() {
    return (
        <div className="slider">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg"/>
                <img src={image2} className="sliderimg"/>
                <img src={image3} className="sliderimg"/>
                <img src={image4} className="sliderimg"/>
                <img src={image5} className="sliderimg"/>
                
            </AliceCarousel>
        </div>
    )
}

export default Slider;