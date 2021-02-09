import React, {useState} from "react";
import Header from "../Header/Header";
import "./Main.scss";

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
      <main className = {isHeaderScrolled ? "main main--scrolled" : "main"}>
        
      </main>
    </>
  )
}