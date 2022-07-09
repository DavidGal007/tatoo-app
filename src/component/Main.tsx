import React from "react";
import "../style/header.scss";

const Main: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              We serve high quality tatoo of all kinds.
            </h1>
            <p className="hero__description">
              je suis infirmière , tatoueuse reconvertie. en plus de tatouages
              personnalisés , je propose une experience,
            </p>
            <button className="hero__btn">View More</button>
            <div className="hero__information">
              <article className="subinfo">
                <h5 className="subinfo__title">Horaires d'ouverture</h5>
                <span className="subinfo__pfs">
                  Du lundi au vendredi | 12h a 17h30. possibilité de rdv tout les jours entre 8h et 20h
                </span>
              </article>
              <article className="subinfo">
                <h5 className="subinfo__title">Location</h5>
                <span className="subinfo__pfs">
                  50 rue Gerville Reache, Trois-Rivières 97114, Et Guadeloupe
                </span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
