import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import HomeIcon from "../../../img/HomeIcon.svg";
import CampingIcon from "../../../img/CampingsIcon.svg";
import ReviewsIcon from "../../../img/star.svg";
import AuthIcon from "../../../img/user.svg";
import "./MobileDownbar.less";

export default function MobileDownbar(props) {
  let {isUserLoggedIn} = props;
  return (
    <div className = "mobileDownbar__wrapper">
      <NavLink exact to = "/" activeClassName = "mobileDownbar__link_active" className = "mobileDownbar__link">
        <div className = "mobileDownbar__option">
          <HomeIcon />
          <span className = "mobileDownbar__description">Главная</span>
        </div>
      </NavLink>
      <NavLink to = "/campings/page/1" isActive = {(match, location) => {
        if (location.pathname.includes("/campings/page/") || location.pathname.includes("/campings/id/")) {
          return true;
        }
        else {
          return false;
        }
      }} activeClassName = "mobileDownbar__link_active" className = "mobileDownbar__link">
        <div className = "mobileDownbar__option">
          <CampingIcon />
          <span className = "mobileDownbar__description">Кемпинги</span>
        </div>
      </NavLink>
      <NavLink exact to = "/reviews" activeClassName = "mobileDownbar__link_active" className = "mobileDownbar__link">
        <div className = "mobileDownbar__option">
          <ReviewsIcon />
          <span className = "mobileDownbar__description">Отзывы</span>
        </div>
      </NavLink>
      <NavLink exact to = "/signin" activeClassName = "mobileDownbar__link_active" className = "mobileDownbar__link">
        <div className = "mobileDownbar__option">
          <AuthIcon />
          <span className = "mobileDownbar__description">{isUserLoggedIn ? "Личный кабинет" : "Вход"}</span>
        </div>
      </NavLink>
    </div>
  )
}
