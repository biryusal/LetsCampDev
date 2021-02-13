import React from "react";
import {NavLink} from "react-router-dom";
import CampingPlugImage from "../../../../img/bigAdvantage.png";
import Star from "../../../../img/star.svg";
import "./CampingCard.scss";

export default (props) => {
  let {name, rate, pricePerDay, number} = props,
      id = number - 1;
  return (
    <div className = "campingCard__item">
      <NavLink exact to = {"/campings/id/"+ id}>
        <div className = "campingCard__imgWrapper">
          <img className = "campingCard__img" src = {CampingPlugImage}></img>
        </div>
      </NavLink>
      <div className = "campingCard__rating">
        <div className = "campingCard__star">
          <Star />
          <span className = "campingCard__starValue">{rate ? rate : 0}</span>
          <NavLink exact to = {"/campings/id/"+ id}>
            <span className = "campingCard__reviews">25 отзывов</span>
          </NavLink>
        </div>
      </div>
      <div className = "campingCard__info">
        <NavLink exact to = {"/campings/id/"+ id}>
          <h3 className = "campingCard__name">{name}</h3>
        </NavLink>
        <span className = "campingCard__price">{pricePerDay} рублей/ночь</span>
      </div>
    </div>
  )
}

