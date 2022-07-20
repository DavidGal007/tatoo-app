import React from "react";
import "../style/gallery.scss";
import Image3 from "../assets/photo3.jpg";
import Galery1 from "../assets/gallery2.jpeg";
import Galery2 from "../assets/gallery3.jpeg";
import Galery3 from "../assets/gallery4.jpeg";
import Galery4 from "../assets/gallery5.jpg";
import Galery5 from "../assets/gallery6.jpg";

const Gallery: React.FC = () => {

  return (
    <section id="galerie" className="gtm">
      <div className="gtm__container container">
      <h2 className="services__title font-base">Flashs et écritures</h2>
        <div className="gtn__inner">
          <figure className="gtn__item">
            <img className="_ibg" src={Image3} alt="gtn" />
          </figure>
          <figure className="gtn__item">
            <img className="_ibg" src={Galery1} alt="gtn" />
          </figure>
          <figure className="gtn__item">
          <img className="_ibg" src={Galery2} alt="gtn" />
          </figure>
          <figure className="gtn__item">
            <img className="_ibg" src={Galery3} alt="gtn" />
          </figure>
          <figure className="gtn__item">
            <img className="_ibg" src={Galery4} alt="gtn" />
          </figure>
          <figure className="gtn__item">
            <img className="_ibg" src={Galery5} alt="gtn" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
