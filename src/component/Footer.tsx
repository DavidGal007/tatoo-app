import React from "react";
import "../style/footer.scss";

interface MalitoType {
   email: string;
   subject: string;
   body: string;
   children: string;
}
const Mailto: React.FC<MalitoType> = ({ email, subject, body, ...props }) => {
  return (
    <a className="footer-link" href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const Footer: React.FC = () => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank');
  };
  let date = new Date();
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__inner">
          <div className="footer__items">
            <p className="footer__content">
              Pour prendre rendez-vous, <span className="link-soce" onClick={() => openInNewTab('https://www.facebook.com/LadyNumen/appointments')}>Pour prendre rdv sur Facebook</span>
              {" "}envoyez-nous un e-mail à l'adresse{" "}
              
                <Mailto email="contact@ladynumen.com" subject="Bonjour" body="J'ai une question">
                contact@ladynumen.com
                </Mailto>
              
            </p>
            <h6 className="footer__subtitle">
              Salon de tatouage : Lady Numen Tattoo, 50 Rue Gerville Reache
              97114 Trois-rivières.
            </h6>
          </div>
        </div>
      </div>
      <div className="copywrite">
        <div className="copywrite-smd">
          © {date.getFullYear()} Lady Numen Tattoo | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
