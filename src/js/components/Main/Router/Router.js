import React from "react";
import "./Router.scss";

export default () => {
  return (
    <div className = "router__wrapper">
      <div className = "router__option">
        <div className = "router__info">
          <span className = "router__header">Местоположение</span>
          <span className = "router__text">Куда едете?</span>
        </div>
      </div>
      <div className = "router__option">
        <div className = "router__info">
          <span className = "router__header">Прибытие</span>
          <span className = "router__text">Когда?</span>
        </div>
      </div>
      <div className = "router__option">
        <div className = "router__info">
          <span className = "router__header">Выезд</span>
          <span className = "router__text">Когда?</span>
        </div>
      </div>
      <div className = "router__option">
        <div className = "router__info">
          <span className = "router__header">Количество гостей</span>
          <span className = "router__text">Сколько гостей?</span>
        </div>
      </div>
    </div>
  )
}