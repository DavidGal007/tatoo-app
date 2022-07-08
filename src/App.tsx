import React from "react";
import "./style/_vars.scss";
import "./style/reset.style.scss";
import Header from "./component/Header";
import Services from "./component/Services";
import Elements from "./component/Elements";
import Effect from "./component/Effect";
import Form from "./component/Form";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Main />
        <Effect />
        <Elements />
        <Services />
        <Gallery />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
