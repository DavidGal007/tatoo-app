import React from 'react'

const Services: React.FC = () => {
  return (
    <section id="servic" className="services container">
        <div className="services__wrapper">
        <h2 className="services__title font-base">Les Arts au pluriel</h2>
            <div className="services__inner">
                <div className="services__article">
                    <img className="services__image" src="https://images.unsplash.com/photo-1614199621267-5812fe71d122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="img" />
                    <h3 className="services__psf font-base">Tatouages</h3>
                </div>
                <div className="services__article">
                    <img className="services__image" src="https://images.unsplash.com/photo-1633443245758-6a507463c89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
                    <h3 className="services__psf font-base">Paint arts</h3>
                </div>
                <div className="services__article">
                    <img className="services__image" src="https://images.unsplash.com/photo-1618513462042-29ac20aefe11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="img" />
                    <h3 className="services__psf font-base">Design</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services