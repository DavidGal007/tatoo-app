import React from "react";
import "../style/elements.scss";
import Sticer from '../assets/sticker.png';
const Elements: React.FC = () => {
  return (
    <section className="elements">
      <div className="elements__wrapper container">
        <div className="elements__inner">
          <div className="elements__images">
            <div className="elements__block">
              
              <div className="elements__img-item">
                <img
                  src="https://images.unsplash.com/photo-1516008684536-605574d804ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                  alt="back"
                />
              </div>
              <div className="elements__img-item">
                <img
                  src="https://images.unsplash.com/photo-1627458514257-41d0ea46e326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                  alt="back"
                />
              </div>
              </div>
            
          </div>
          <div className="elements__cont elem">
            <h4 className="elem__title"><b className="font-base">Lady numen</b> est à votre écoute Dans tous vos projets personnalisés.</h4>
            <p className="elem__phar">
              "Dans l'obscurité, j'avance au clair de ma plume"... Ces quelques
              mots de Grand Corps Malade pourrait résumer l'univers de Lady
              Numen. Une sensibilité à fleur de peau alliée à une légèreté
              humoristique que l'on retrouve dans la douceur de son tracé.
              Infirmière de profession, le dermographe est devenu la plume de sa
              liberté. Amoureuse des aiguilles, passionnée d'arts, elle
              retranscrit son amour de l'autre, le don de soi dans les traits de
              ses tableaux. Elle saura sublimer vos envies et donner vie à vos
              émotions.
            </p>
            <div className="elem__simbol">
                <img width={155} style={{float: 'right'}}  src={Sticer} alt="sticker" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elements;
