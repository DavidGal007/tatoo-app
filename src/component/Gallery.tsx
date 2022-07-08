import React from "react";
import "../style/gallery.scss";
import Galery from "../assets/gallery1.jpeg";
import Galery1 from "../assets/gallery2.jpeg";
import Galery2 from "../assets/gallery3.jpeg";
import Galery3 from "../assets/gallery4.jpeg";
import Galery4 from "../assets/gallery5.jpg";
import Galery5 from "../assets/gallery6.jpg";

function Gallery() {

  return (
    <section id="galerie" className="gtm">
      <div className="gtm__container container">
        <div className="gtn__inner">
          <figure className="gtn__item">
            <img className="_ibg" src={Galery} alt="gtn" />
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
