import React from "react";
import { NavLink } from "react-router-dom";
import "./TourButton.scss";

export default () => {
  return(
    <div className = "tourButton__wrapper">
      <h2 className = "tourButton__header">LetsCamp</h2>
      <p className = "tourButton__subheader">Вслед за путешествиями</p>
      <button className = "tourButton__button">
        <NavLink to = "campings/page/1" className = "tourButton__link">Поиск кемпингов</NavLink>
      </button>
    </div>
  )
}