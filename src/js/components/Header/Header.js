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

  return(
    <header className = {isScrolled ? "header header_scrolled header_fixed" : "header"}>
      <div className = "container header__wrapper header__wrapper_desktop">
        <NavLink to = "/">
          <img className = "header__logo" src = {isScrolled ? BlackLogo : WhiteLogo} alt = "Логотип LetsCamp"></img>
        </NavLink>
        {isScrolled ? <input type = "text" className = "header__input" placeholder = "Куда едем?"></input> :
        <div className = {isScrolled ? "header__links header__links_scrolled" : "header__links"}>
          <NavLink className = "header__link" activeClassName = "header__link_active" exact to = "/">Главная</NavLink>
          <NavLink className = "header__link" activeClassName = "header__link_active" exact to = "/campings/page/1">Кемпинги</NavLink>
          <NavLink className = "header__link" activeClassName = "header__link_active" exact to = "/reviews">Отзывы</NavLink>
        </div>}
        <button id = "sideModulButton" className = {isScrolled ? "header__auth header__auth_gray modalWindowButton" : "header__auth modalWindowButton"}>
          <img className = "header__auth__image" src = {BurgerMenu} alt = "Логотип LetsCamp"></img>
          <img className = "header__auth__image" src = {User} alt = "Логотип LetsCamp"></img>
        </button>
        <SideModul/>
      </div>
      <div className = "container header__wrapper header__wrapper_mobile">
        <input type = "text" className = "header__input" placeholder = "Куда едем?"></input>
      </div>
    </header>
  )
}