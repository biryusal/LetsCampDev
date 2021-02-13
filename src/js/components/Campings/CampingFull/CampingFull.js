import React from "react";
import Header from "../../Header";
import CampingPlugImage from "../../../../img/bigAdvantage.png";
import Star from "../../../../img/star.svg";
import "./CampingFull.less";
import Footer from "../../Footer";

export default (props) => {
  console.log(props);
  let {number, name, rate} = props;
  return (
    <>
      <Header isScrolled = {true}></Header>
      <main className = "campingFull__wrapper container">
        <h1 className = "campingFull__name">{name}</h1>
        <section className = "campingFull__rating">
          <div className = "campingFull__stars">
            <Star />
          </div>
          <div className = "campingFull__rateValue">
            <span className = "campingFull__rate">{rate}</span>
            <span className = "campingFull__reviewsCount">25 отзывов</span>
          </div>
        </section>
        <section className = "campingFull__brief">
          <div className = "campingFull__imgWrapper">
            <img src = {CampingPlugImage} alt = "Фото кемпинга" className = "campingFull__img"></img>
            <img src = {CampingPlugImage} alt = "Фото кемпинга" className = "campingFull__img"></img>
            <img src = {CampingPlugImage} alt = "Фото кемпинга" className = "campingFull__img"></img>
          </div>
          <div className = "campingFull__possibilities">
            Здесь я красиво оформлю, каким фильтрам соответсвует данный кемпинг.
          </div>
        </section>
        <section className = "campingFull__info">
          <span className = "campingFull__text">Здесь описание кемпинга.</span>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}