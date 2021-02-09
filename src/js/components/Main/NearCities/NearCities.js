import React from "react";
import CityPlaceholder from "../../../../img/city-placeholder.jpg";
import "./NearCities.scss";

export default () => {
  return (
    <div>
      <h2 className = "nearCities__heading">Рядом с Вами</h2>
      <div className = "nearCities__wrapper">
        <div className = "nearCities__card">
          <div className = "nearCities__imgWrapper">
            <img src = {CityPlaceholder} alt = "Картинка города" className = "nearCities__img"></img>
          </div>
          <div className = "nearCities__info">
            <h2 className = "nearCities__header">Москва</h2>
            <span className = "nearCities__text">15 мин. езды</span>
          </div>
        </div>
        <div className = "nearCities__card">
          <div className = "nearCities__imgWrapper">
            <img src = {CityPlaceholder} alt = "Картинка города" className = "nearCities__img"></img>
          </div>
          <div className = "nearCities__info">
            <h2 className = "nearCities__header">Москва</h2>
            <span className = "nearCities__text">15 мин. езды</span>
          </div>
        </div>
        <div className = "nearCities__card">
          <div className = "nearCities__imgWrapper">
            <img src = {CityPlaceholder} alt = "Картинка города" className = "nearCities__img"></img>
          </div>
          <div className = "nearCities__info">
            <h2 className = "nearCities__header">Москва</h2>
            <span className = "nearCities__text">15 мин. езды</span>
          </div>
        </div>
        <div className = "nearCities__card">
          <div className = "nearCities__imgWrapper">
            <img src = {CityPlaceholder} alt = "Картинка города" className = "nearCities__img"></img>
          </div>
          <div className = "nearCities__info">
            <h2 className = "nearCities__header">Москва</h2>
            <span className = "nearCities__text">15 мин. езды</span>
          </div>
        </div>
        <div className = "nearCities__card">
          <div className = "nearCities__imgWrapper">
            <img src = {CityPlaceholder} alt = "Картинка города" className = "nearCities__img"></img>
          </div>
          <div className = "nearCities__info">
            <h2 className = "nearCities__header">Москва</h2>
            <span className = "nearCities__text">15 мин. езды</span>
          </div>
        </div>
        <div className = "nearCities__card">
          <div className = "nearCities__imgWrapper">
            <img src = {CityPlaceholder} alt = "Картинка города" className = "nearCities__img"></img>
          </div>
          <div className = "nearCities__info">
            <h2 className = "nearCities__header">Москва</h2>
            <span className = "nearCities__text">15 мин. езды</span>
          </div>
        </div>
        <div className = "nearCities__card">
          <div className = "nearCities__imgWrapper">
            <img src = {CityPlaceholder} alt = "Картинка города" className = "nearCities__img"></img>
          </div>
          <div className = "nearCities__info">
            <h2 className = "nearCities__header">Москва</h2>
            <span className = "nearCities__text">15 мин. езды</span>
          </div>
        </div>
        <div className = "nearCities__card">
          <div className = "nearCities__imgWrapper">
            <img src = {CityPlaceholder} alt = "Картинка города" className = "nearCities__img"></img>
          </div>
          <div className = "nearCities__info">
            <h2 className = "nearCities__header">Москва</h2>
            <span className = "nearCities__text">15 мин. езды</span>
          </div>
        </div>
      </div>
    </div>
  )
}