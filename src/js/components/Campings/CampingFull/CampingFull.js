import React from "react";
import Header from "../../Header";
import CampingPlugImage from "../../../../img/bigAdvantage.png";
import Star from "../../../../img/star.svg";
import "./CampingFull.less";
import Footer from "../../Footer";
import MobileDownbar from "../../MobileDownbar/MobileDownBar";
import WiFiIcon from "../../../../img/wi-fi.svg";
import AnimalsIcon from "../../../../img/animal.svg";
import ElectricityIcon from "../../../../img/electricity.svg";
import FoodIcon from "../../../../img/food.svg";
import WaterIcon from "../../../../img/water.svg";
import KidsIcon from "../../../../img/kid.svg";
import NonsmokeZoneIcon from "../../../../img/no-smoking.svg";
import ParkSpaceIcon from "../../../../img/parking.svg";
import PeopleDisabilitiesIcon from "../../../../img/disability.svg";
import SleepSpaceIcon from "../../../../img/bed.svg";

export default (props) => {
  let {number, name, rate, WiFi, animals, electricity, food,
  isWater, kids, link, nonsmokeZone, parkSpace, peopleDisabilities, place,
  pricePerDay, sleepSpace, region} = props;
  return (
    <>
      <Header isScrolled = {true}></Header>
      <main className = "campingFull__wrapper container">
        <div className = "campingFull__headerInfo">
          <h1 className = "campingFull__name">{name ? name : null}</h1>
          <h1 className = "campingFull__price">{pricePerDay ? pricePerDay : null}</h1>
        </div>
        <h2 className = "campingFull__region">{region ? region : null}, {place ? place : null}</h2>
        <section className = "campingFull__rating">
          <div className = "campingFull__stars">
            <Star />
          </div>
          <div className = "campingFull__rateValue">
            <span className = "campingFull__rate">{rate ? rate : null}</span>
            <span className = "campingFull__reviewsCount">25 отзывов</span>
          </div>
        </section>
        <section className = "campingFull__brief">
          <div className = "campingFull__imgWrapper">
            <img src = {CampingPlugImage} alt = "Фото кемпинга" className = "campingFull__img"></img>
            <img src = {CampingPlugImage} alt = "Фото кемпинга" className = "campingFull__img"></img>
            <img src = {CampingPlugImage} alt = "Фото кемпинга" className = "campingFull__img"></img>
          </div>
          <h1 className = "campingFull__text">Здесь описание кемпинга.</h1>
          <div className = "campingFull__possibilities">
            {WiFi === "true" ? <div className = "campingFull__option">
              <WiFiIcon />
              <span className = "campingFull__description">Имеется Wi-Fi</span>
            </div> : null}
            {animals === "true" ? <div className = "campingFull__option">
              <AnimalsIcon />
              <span className = "campingFull__description">Можно с животными</span>
            </div> : null}
            {electricity === "true" ? <div className = "campingFull__option">
              <ElectricityIcon />
              <span className = "campingFull__description">Есть электричество</span>
            </div> : null}
            {food === "true" ? <div className = "campingFull__option">
              <FoodIcon />
              <span className = "campingFull__description">Имеется еда</span>
            </div> : null}
            {isWater === "true" ? <div className = "campingFull__option">
              <WaterIcon />
              <span className = "campingFull__description">Имеется вода</span>
            </div> : null}
            {kids === "true" ? <div className = "campingFull__option">
              <KidsIcon />
              <span className = "campingFull__description">Можно с детьми</span>
            </div> : null}
            {nonsmokeZone === "true" ? <div className = "campingFull__option">
              <NonsmokeZoneIcon />
              <span className = "campingFull__description">Зона для некурящих</span>
            </div> : null}
            {parkSpace === "true" ? <div className = "campingFull__option">
              <ParkSpaceIcon />
              <span className = "campingFull__description">Парковочные места</span>
            </div> : null}
            {peopleDisabilities === "true" ? <div className = "campingFull__option">
              <PeopleDisabilitiesIcon />
              <span className = "campingFull__description">Для людей с ограниченными способностями</span>
            </div> : null}
            {sleepSpace === "true" ? <div className = "campingFull__option">
              <SleepSpaceIcon/>
              <span className = "campingFull__description">Спальные места</span>
            </div> : null}
          </div>
        </section>
      </main>
      <MobileDownbar />
      <Footer />
    </>
  )
}