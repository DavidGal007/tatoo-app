import React from "react";
import "../style/header.scss";
import Image1 from "../assets/photo1.jpg";
import Image2 from "../assets/photo2.jpg";
import Image4 from "../assets/photo4.jpg";
import Image5 from "../assets/photo3.jpeg";
import Image6 from "../assets/photo6.jpg";
import Image7 from "../assets/photom.jpg";
import Image8 from "../assets/photo8.jpeg";
import Galery from "../assets/gallery1.jpeg";
import Image9 from "../assets/photo9.jpg";
import Image10 from "../assets/photo10.jpeg";
import Image11 from "../assets/photo11.jpeg";
import Image12 from "../assets/photo12.jpg";

const Effect: React.FC = () => {
  return (
    <div>
      <div className="container">
        <h2
          style={{
            paddingTop: 10,
          }}
          className="services__title font-base"
        >
          Projets personnalisés
        </h2>
        <div className="gallery gallery__img">
          <div className="gallery__item">
            <img src={Image2} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Galery} alt="gallery" />
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
            <img src={Image9} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image10} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image11} alt="gallery" />
          </div>
          <div className="gallery__item">
            <img src={Image12} alt="gallery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effect;
