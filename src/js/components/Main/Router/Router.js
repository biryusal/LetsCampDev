import React from "react";
import { connect } from "react-redux";
import SelectCity from "../../SelectCity";
import "./Router.scss";

function Router(props) {
  const {region} = props;
  return (
    <div className = "router router__wrapper">
      <div className = "router__option modalWindowButton" id = "selectCityButton">
        <div className = "router__info">
          <span className = "router__header">Местоположение</span>
          <span className = "router__city">{region ? region : "Куда едете?"} </span>
        </div>
      </div>
      <SelectCity selectedRegion = {region ? region : null}/>
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

const MapStateToProps = (state) => {
  return {
    region: state.userSelectedRegion
  }
}

export default connect(MapStateToProps, null)(Router);