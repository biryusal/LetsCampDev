import React from "react";
import Header from "../../Header";
import CampingPlugImage from "../../../../img/bigAdvantage.png";
import Star from "../../../../img/star.svg";
import "./CampingFull.less";

export default (props) => {
  let {number, name, rate} = props;
  console.log(props);
  return (
    <>
      <div className = "campings__colorWrapper">
        <div class = "container">
          <Header isScrolled = {true}></Header>
        </div>
      </div>
      <div className = "campingFull__wrapper container">
        <h1 className = "campingFull__name">{name}</h1>
        <div className = "campingFull__rating">
          <div className = "campingFull__stars">
            <Star />
          </div>
          <div className = "campingFull__rateValue">
            <span className = "campingFull__rate">{rate}</span>
            <span className = "campingFull__reviewsCount">25 отзывов</span>
          </div>
        </div>
        <div className = "campingFull__imgWrapper">
          <img src = {CampingPlugImage} alt = "Фото кемпинга" className = "campingFull__img"></img>
        </div>
        <div className = "campingFull__info">
          <span className = "campingFull__text">Здесь описание кемпинга</span>
        </div>
      </div>
    </>
  )
}