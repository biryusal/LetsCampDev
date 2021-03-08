import React, { useEffect } from "react";
import Main from "./js/components/Main";
import {
  BrowserRouter, 
  Route, Switch
} from "react-router-dom";
import { connect } from "react-redux";
import Campings from "./js/components/Campings/Campings";
import CampingPage from "./js/components/Campings/CampingPage/CampingPage";
import ScrollToTop from "./js/functions";

function App() {

  window.onload = function() {
    document.addEventListener("click", (event) => {
      let modalButtons = document.getElementsByClassName("modalWindowButton"),
          modalWindows = document.getElementsByClassName("modalWindow");
      if (event.target.classList.contains("modalWindowButton")) {
        let currentButton = document.getElementById(event.target.id),
            currentWindow = document.getElementById(event.target.id.slice(0, event.target.id.indexOf("Button")));

        if (currentWindow.style.display == "none" || currentWindow.style.display == "") {
          for (let i = 0; i < modalWindows.length; i++) {
            modalWindows[i].style.display = "none";
          }
  
          for (let k = 0; k < modalButtons.length; k++) {
            modalButtons[k].classList.remove(modalButtons[k].id + "_active");
          }
          currentWindow.style.display = "block";
          currentButton.classList.add(event.target.id + "_active");    
        }

        else {
          for (let i = 0; i < modalWindows.length; i++) {
            modalWindows[i].style.display = "none";
          }
  
          for (let k = 0; k < modalButtons.length; k++) {
            modalButtons[k].classList.remove(modalButtons[k].id + "_active");
          }   
          currentWindow.style.display = "none";
          currentButton.classList.remove(event.target.id + "_active");    
        }
      }

      else {
        if (!event.target.closest(".modalWindow")) {
          for (let i = 0; i < modalWindows.length; i++) {
            modalWindows[i].style.display = "none";
          }
  
          for (let k = 0; k < modalButtons.length; k++) {
            modalButtons[k].classList.remove(modalButtons[k].id + "_active");
          }
        }
      }
    }, false);
  }

  return (
    <BrowserRouter onUpdate = {() => window.scrollTo(0, 0)}>
      <ScrollToTop />
      <Switch>
        <Route exact path = "/" render = {() => <Main />}></Route>
        <Route exact path = "/campings/page/:page" render = {() => <Campings />}></Route>
        <Route exact path = "/campings/id/:id" render = {() => <CampingPage />}></Route>
      </Switch>
    </BrowserRouter>
  )
}

const MapDispatchToProps = dispatch => ({
  initializeUser: () => dispatch(initializeUser())
})

export default connect(null, MapDispatchToProps)(App);