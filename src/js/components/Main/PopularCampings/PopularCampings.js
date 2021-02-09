import React from "react";
import PopularCampings from "../../../../img/popularCamping.jpg";
import "./PopularCampings.less";

export default () => {
  return (
    <div>
      <h2 className = "popularCampings__header">Популярные кемпинги</h2>
      <div className = "popularCampings__wrapper">
        <div className = "popularCampings__card">
          <div className = "popularCampings__imgWrapper">
            <img className = "popularCampings__img" alt = "Популярный кемпинг" src = {PopularCampings}></img>
          </div>
          <h2 className = "popularCampings__name">Название</h2>
        </div>
        <div className = "popularCampings__card">
          <div className = "popularCampings__imgWrapper">
            <img className = "popularCampings__img" alt = "Популярный кемпинг" src = {PopularCampings}></img>
          </div>
          <h2 className = "popularCampings__name">Название</h2>
        </div>
          <div className = "popularCampings__card">
        <div className = "popularCampings__imgWrapper">
            <img className = "popularCampings__img" alt = "Популярный кемпинг" src = {PopularCampings}></img>
          </div>
          <h2 className = "popularCampings__name">Название</h2>
        </div>
        <div className = "popularCampings__card">
          <div className = "popularCampings__imgWrapper">
            <img className = "popularCampings__img" alt = "Популярный кемпинг" src = {PopularCampings}></img>
          </div>
          <h2 className = "popularCampings__name">Название</h2>
        </div>
      </div>
    </div>
  )
}