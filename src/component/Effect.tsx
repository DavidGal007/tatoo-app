import React from "react";
import "../style/header.scss";
import Image1 from "../assets/photo1.jpg";
import Image2 from "../assets/photo2.jpg";
import Image3 from "../assets/photo3.jpg";
import Image4 from "../assets/photo4.jpg";
import Image5 from "../assets/photo5.jpg";
import Image6 from "../assets/photo6.jpg";
import Image7 from "../assets/photo7.jpeg";
import Image8 from "../assets/photo8.jpeg";

const Effect: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="gallery gallery__img">
          <div className="gallery__item">
            <img src={Image2} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image3} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image1} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image4} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image5} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image6} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image7} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image8} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image6} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image7} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image8} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image5} alt="gallery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effect;