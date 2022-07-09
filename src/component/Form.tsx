import React from "react";
import { Link } from "react-router-dom";
import "../style/form.scss";
import Icon from "../assets/whats.svg";
import emailjs from '@emailjs/browser';

const Form: React.FC = () => {

  const form = React.useRef<null | HTMLFormElement>(null);
  const SendMenssage = () => {
    window.open('https://wa.me/message/6YGA5NBXIFTAM1', '_blank');
  }
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_4gwmwxy', 'template_r99qscn', e.currentTarget, 'gKXrgqEb0kGm6Fxq9')
      .then((result) => {
         if(result.status === 200) {
          alert('Merci pour votre demande!')
         }
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset();
  };
  
  return (
    <section id="contact" className="form">
      <div className="form__wrapper container">
        <h1 className="form__title">Contact</h1>
        <div className="form__inner">
          <div className="form__about-us">
            <div className="about">
              <p className="about-phone">+069(0)-931-814</p>
              <ul className="about-days">
                <li className="about-list">Ouvert du lundi au vendredi.</li>
                <li className="about-list">
                  Possibilité de prise de Rdv entre 10h et 20h
                </li>
                <li className="about-list">la semaine et le weekend</li>
              </ul>
              <h4 className="about-title font-base">About Us</h4>
              <p className="about-desc">
                Lady Numen Arts {"&"} Tattoo voit le jour en 2021. Fondé par
                Aline alias Numen, le salon Lady Numen Arts and Tattoo propose
                ses services aux particuliers et aux entreprises . Notre
                objectif : vous permettre de vous sentir bien et d'exprimer
                votre vérité. Nous sommes à votre écoute pour vous aider à
                concrétiser votre projet et à révéler votre beauté intérieure.
                Nous utilisons exclusivement des produits de hautes qualités
                (encres de normes européenne ) et les machines les plus
                performants ( Dragon Fly, Scorpio). Formé par "La Dame de Pique"
                à Echirolles (France), c'est plus de 13 ans d'expérience que
                Lady Numen met à votre service. Amoureuse des voyages, c'est à
                travers de multiples rencontres, entre océan Atlantique et mers
                des Caraïbes, que s'est façonné l'univers Lady Numen. En 2011,
                elle pose ses valise en Guadeloupe et commence une découverte
                intérieure. Tatouage, fresques, poteries, son art s'exprime sur
                tous les supports. Infirmière de métier, elle décide d'allier
                son amour de l'autre à sa passion des aiguilles et de se
                consacrer entièrement à son art pour votre plus grand plaisir.
                Qu'attendez-vous pour prendre rendez-vous ? Appelez-nous ou
                envoyez-nous un e-mail dès maintenant.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="form__block">
              <div className="form-item">
                <label htmlFor="">Name</label>
                <input
                  className="form-textfield"
                  type="text"
                  placeholder="Jhon Doe"
                  name="name"
                />
              </div>
              <div className="form-item">
                <label htmlFor="">Email</label>
                <input
                  className="form-textfield"
                  type="text"
                  placeholder="jhon@email.com"
                  name="email"
                />
              </div>
              <div className="form-item">
                <label htmlFor="">Message</label>
                <textarea
                  className="form-textfield"
                  placeholder="Enter your message here..."
                  name="message"
                ></textarea>
              </div>
              <button className="form-btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="wp-wrapper">
        <figure className="wp-content">
          <Link onClick={SendMenssage} to="#">
            <img width={55} src={Icon} alt="icons" />
          </Link>
        </figure>
      </div>
    </section>
  );
};

export default Form;
