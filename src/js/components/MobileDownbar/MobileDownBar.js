import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import MainPage from "../../../img/homepage.png";
import Campings from "../../../img/campings.png";
import Reviews from "../../../img/reviews.png";
import Auth from "../../../img/user.png";
import "./MobileDownbar.less";

export default function MobileDownbar(props) {
  let {isUserLoggedIn} = props;
  return (
    <div className = "mobileDownbar__wrapper">
      <NavLink to = "/" className = "mobileDownbar__link">
        <div className = "mobileDownbar__option">
          <img src = {MainPage} alt = "Главная" className = "mobileDownbar__img"></img>
          <span className = "mobileDownbar__description">Главная</span>
        </div>
      </NavLink>
      <NavLink to = "/campings/page/1" className = "mobileDownbar__link">
        <div className = "mobileDownbar__option">
          <img src = {Campings} alt = "Кемпинги" className = "mobileDownbar__img"></img>
          <span className = "mobileDownbar__description">Кемпинги</span>
        </div>
      </NavLink>
      <NavLink to = "/" className = "mobileDownbar__link">
        <div className = "mobileDownbar__option">
          <img src = {Reviews} alt = "Отзывы" className = "mobileDownbar__img"></img>
          <span className = "mobileDownbar__description">Отзывы</span>
        </div>
      </NavLink>
      <NavLink to = "/signin" className = "mobileDownbar__link">
        <div className = "mobileDownbar__option">
          <img src = {Auth} alt = "Вход" className = "mobileDownbar__img"></img>
          <span className = "mobileDownbar__description">{isUserLoggedIn ? "Личный кабинет" : "Вход"}</span>
        </div>
      </NavLink>
    </div>
  )
}
