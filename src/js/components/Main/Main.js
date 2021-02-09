import React, {useState} from "react";
import "./Main.scss";
import Header from "../Header/Header";
import Router from "./Router";
import TourButton from "./TourButton";
import NearCities from "./NearCities/NearCities";
import PopularCampings from "./PopularCampings";
import Footer from "../Footer";

export default () => {
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  }
  return(
    <>
      <Header isScrolled = {isHeaderScrolled}/>
      <main className = "main">
        <section className = {isHeaderScrolled ? "main__imgBackground main__imgBackground_scrolled" : "main__imgBackground"}>
          <div className = "container">
            <Router />
            <TourButton />
          </div>
        </section>
        <section className = "container">
          <NearCities />
          <PopularCampings />
        </section>
      </main>
      <Footer />
    </>
  )
}