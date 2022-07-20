import React from 'react'
import Art2 from '../assets/art2.jpeg'
import Art3 from '../assets/artesq.jpg'

const Services: React.FC = () => {
  return (
    <section id="servic" className="services container">
        <div className="services__wrapper">
        <h2 className="services__title font-base">Covers et embellissement de cicatrices</h2>
            <div className="services__inner">
                <div className="services__article">
                    <img className="services__image" src="https://images.unsplash.com/photo-1614199621267-5812fe71d122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="img" />
                    <h3 className="services__psf font-base">TATOUAGES</h3>
                </div>
                <div className="services__article">
                    <img className="services__image" src={Art3} alt="img" />
                    <h3 className="services__psf font-base">Croquis</h3>
                </div>
                <div className="services__article">
                    <img className="services__image" src={Art2} alt="img" />
                    <h3 className="services__psf font-base">Cover</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services