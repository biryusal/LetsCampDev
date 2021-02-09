import React from "react";
import "./TourButton.scss";

export default () => {
  return(
    <div className = "tourButton__wrapper">
      <h2 className = "tourButton__header">LetsCamp</h2>
      <p className = "tourButton__subheader">Вслед за путешествиями</p>
      <button className = "tourButton__button">Поиск кемпингов</button>
    </div>
  )
}