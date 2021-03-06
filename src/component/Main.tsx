import React from "react";
import { HashLink } from "react-router-hash-link";
import "../style/header.scss";

const Main: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__inner container">
          <div className="hero__content">
            <h1 className="hero__title">
            Osez franchir le pas. Rejoignez l'univers du tatouage.
            </h1>
            <p className="hero__description">
              Lady Numen , infirmière tatoueuse, vous propose en plus d'un
              tatouage entièrement personnalisé, une experience, une
              réalisation de votre projet entièrement guidée par l'amour de son
              art et la maitrise de ses aiguilles.
            </p>
            <HashLink to="#contact" className="hero__btn-plus">
              Savoir plus
            </HashLink>
            <div className="hero__information">
              <article className="subinfo">
                <h5 className="subinfo__title">Horaires d'ouverture</h5>
                <span className="subinfo__pfs">
                  Du lundi au vendredi | 12h a 17h30. possibilité de rdv tout
                  les jours entre 8h et 20h
                </span>
              </article>
              <article className="subinfo">
                <h5 className="subinfo__title">Adresse</h5>
                <span className="subinfo__pfs">
                  50 rue Gerville Reache, Trois-Rivières 97114, Guadeloupe
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
