import React from "react";
import WhiteLogo from "../../../img/logo_white.png";
import BlackLogo from "../../../img/logo_black.png";
import BurgerMenu from "../../../img/burger-menu.png";
import User from "../../../img/user.png";
import {NavLink} from "react-router-dom";
import "./Header.scss";
import SideModul from "../SideModul";
import { setHeaderClosedOnShadowClick } from "../../functions";

export default (props) => {
  let {isScrolled} = props;

  let header = document.getElementById("header"),
      headerRouter = document.getElementById("headerRouter"),
      headerOutfit = document.getElementById("headerOutfit");


  function headerOutfitHandler() {
    headerOutfit.classList.remove("header__outfit_opened");
    headerOutfit.classList.add("header__outfit_closed");
    header.classList.remove("header_opened");
    header.classList.add("header_closed");
    headerRouter.classList.remove("header__router_scrolled");
    headerRouter.classList.add("header__router_disabled");
  }

  function routerHandler() {    
    if (header.classList.contains("header_opened")) {
      headerOutfit.classList.remove("header__outfit_opened");
      headerOutfit.classList.add("header__outfit_closed");
      header.classList.remove("header_opened");
      header.classList.add("header_closed");
      headerRouter.classList.remove("header__router_scrolled");
      headerRouter.classList.add("header__router_disabled");
    }

    else {
      headerOutfit.classList.add("header__outfit_opened");
      headerOutfit.classList.remove("header__outfit_closed");
      header.classList.remove("header_closed");
      header.classList.add("header_opened");
      headerRouter.classList.remove("header__router_disabled");
      headerRouter.classList.add("header__router_scrolled");

      document.addEventListener("click", (e) => setHeaderClosedOnShadowClick(e));
    }
  }

  return(
    <>
    <header id = "header" className = {isScrolled ? "header header_scrolled header_fixed" : "header"}>
      <div className = "container header__wrapper header__wrapper_desktop">
        <NavLink to = "/">
          <img className = "header__logo" src = {isScrolled ? BlackLogo : WhiteLogo} alt = "Логотип LetsCamp"></img>
        </NavLink>
        {isScrolled ? <input type = "text" onClick = {routerHandler} className = "header__input" placeholder = "Куда едем?"></input> :
        <div className = {isScrolled ? "header__links header__links_scrolled" : "header__links"}>
          <NavLink className = "header__link" activeClassName = "header__link_active" exact to = "/">Главная</NavLink>
          <NavLink isActive = {(match, location) => {
          if (location.pathname.includes("/campings/page/") || location.pathname.includes("/campings/id/")) {
            return true;
          }
          else {
            return false;
          }
         }} className = "header__link" activeClassName = "header__link_active" exact to = "/campings/page/1">Кемпинги</NavLink>
          <NavLink className = "header__link" activeClassName = "header__link_active" exact to = "/reviews">Отзывы</NavLink>
        </div>}
        <button id = "sideModulButton" className = {isScrolled ? "header__auth header__auth_gray modalWindowButton" : "header__auth modalWindowButton"}>
          <img className = "header__auth__image" src = {BurgerMenu} alt = "Логотип LetsCamp"></img>
          <img className = "header__auth__image" src = {User} alt = "Логотип LetsCamp"></img>
        </button>
        <SideModul/>
      </div>
      <div id = "headerRouter" className = {isScrolled ? "container header__router header__router_disabled" : "header__router_disabled"}>
        <NavLink className = "header__link_scrolled" activeClassName = "header__link_scrolled_active" exact to = "/">Главная</NavLink>
        <NavLink isActive = {(match, location) => {
        if (location.pathname.includes("/campings/page/") || location.pathname.includes("/campings/id/")) {
          return true;
        }
        else {
          return false;
        }
      }} className = "header__link_scrolled" activeClassName = "header__link_scrolled_active" exact to = "/campings/page/1">Кемпинги</NavLink>
        <NavLink className = "header__link_scrolled" activeClassName = "header__link_scrolled_active" exact to = "/reviews">Отзывы</NavLink>
      </div>
      <div className = "container header__wrapper header__wrapper_mobile">
        <input onClick = {routerHandler} type = "text" className = "header__input" placeholder = "Куда едем?"></input>
      </div>
    </header>
    <div id = "headerOutfit" onClick = {headerOutfitHandler} className = {isScrolled ? "header__outfit header__outfit_closed" : "header__outfit_closed"}></div>
    </>
  )
}