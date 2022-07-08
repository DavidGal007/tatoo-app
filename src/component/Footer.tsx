import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.scss";

const Footer: React.FC = () => {
  let date = new Date();
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__inner">
          <div className="footer__items">
            <p className="footer__content">
              Pour prendre rendez-vous, appelez-nous au 0690-931-814 ou
              envoyez-nous un e-mail à l'adresse{" "}
              <span>
                <Link
                  className="footer-link"
                  to="mailto:contact@ladynumen.com"
                  target="_blank"
                >
                  contact@ladynumen.com
                </Link>
              </span>
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
