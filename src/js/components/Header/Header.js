import React from "react";
import WhiteLogo from "../../../img/logo_white.png";
import BlackLogo from "../../../img/logo_black.png";
import BurgerMenu from "../../../img/burger-menu.png";
import User from "../../../img/user.png";
import {NavLink} from "react-router-dom";
import "./Header.scss";
import SideModul from "../SideModul";

export default (props) => {
  let {isScrolled} = props;

  function sideModulHandler() {
    document.getElementById("sideModul").style.display == "block" ?
    document.getElementById("sideModul").style.display = "none" :
    document.getElementById("sideModul").style.display = "block";
  }

  return(
    <header className = {isScrolled ? "header header__scrolled header--fixed" : "header"}>
      <div className = "container header__wrapper">
        <img className = "header__logo" src = {isScrolled ? BlackLogo : WhiteLogo} alt = "Логотип LetsCamp"></img>
          {isScrolled ? <input type = "text" className = "header__input" placeholder = "Куда едем?"></input> : <div className = "header__links">
            <NavLink className = "header__link" activeClassName = "header__link--active" exact to = "/">Главная</NavLink>
            <NavLink className = "header__link" activeClassName = "header__link--active" exact to = "/campings/page/1">Кемпинги</NavLink>
            <NavLink className = "header__link" activeClassName = "header__link--active" exact to = "/reviews">Отзывы</NavLink>
          </div>}
          <button onClick = {sideModulHandler} className = {isScrolled ? "header__auth header__auth--gray" : "header__auth"}>
            <img className = "header__auth__image" src = {BurgerMenu} alt = "Логотип LetsCamp"></img>
            <img className = "header__auth__image" src = {User} alt = "Логотип LetsCamp"></img>
          </button>
          <SideModul />
        </div>
    </header>
  )
}