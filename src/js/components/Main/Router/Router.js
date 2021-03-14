import React, {useState} from "react";
import { connect } from "react-redux";
import SelectCity from "../../SelectCity";
import DatePicker, {registerLocale} from "react-datepicker";
import {ru} from "date-fns/esm/locale";
import "./Router.scss";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import SelectGuests from "../../SelectGuests";
import { DateToFormated } from "../../../functions";

function Router(props) {
  const {region, routerHandler, isHeader, selectedGuestsOutput} = props;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  registerLocale("ru", ru);
  function handleDateChange(dateName, dateValue) {
    if (dateName === "startDateTime") {
      setStartDate(dateValue);
      setEndDate(addDays(dateValue, 1));
    } else {
      setEndDate(dateValue);
    }
  }
  return (
    <div className = {isHeader ? "router router__wrapper router__wrapper_circled router__wrapper_header" : "router router__wrapper"}>
      <div className = "router__option modalWindowButton" id = "selectCityButton">
        <div className = "router__info">
          <span className = "router__header">Местоположение</span>
          <span className = "router__city">{region ? region : "Куда едете?"} </span>
        </div>
      </div>
      <SelectCity desktop selectedRegion = {region ? region : null}/>
      <DatePicker
      minDate = {new Date()}
      value = {startDate}
      id = "datapickerFrom"
      onCalendarOpen = {() => {
        document.getElementById("datapickerFrom").classList.add("router__option_active");
       }}
      onCalendarClose = {() => {
        document.getElementById("datapickerFrom").classList.remove("router__option_active");
      }}
      wrapperClassName = "router__option"
      customInput = {
          <div className = "router__datePicker">
            <div className = "router__info">
              <span className = "router__header">Прибытие</span>
              <span className = "router__text">{startDate ? DateToFormated(startDate) : "Выберите дату заезда"}</span>
            </div>
          </div>}
      locale = "ru" 
      selected = {startDate} 
      onChange = {date => handleDateChange("startDateTime", date)} />
      <DatePicker
      value = {endDate}
      id = "datapickerTo"
      onCalendarOpen = {() => {
       document.getElementById("datapickerTo").classList.add("router__option_active");
      }}
      onCalendarClose = {() => {
        document.getElementById("datapickerTo").classList.remove("router__option_active");
       }}
      wrapperClassName = "router__option"
      customInput = {
        <div className = "router__datePicker">
          <div className = "router__info">
            <span className = "router__header">Отбытие</span>
            <span className = "router__text">{endDate ? DateToFormated(endDate) : "Выберите дату выезда"}</span>
          </div>
        </div>}
      locale = "ru" 
      selected = {endDate}
      minDate = {startDate}
      onChange = {date => handleDateChange("endDateTime", date)} />
      <div className = "router__option modalWindowButton" id = "selectGuestsButton">
        <div className = "router__info">
          <span className = "router__header">Гости</span>
          <span className = "router__text">{selectedGuestsOutput ? selectedGuestsOutput : "Сколько гостей?"}</span>
        </div>
      </div>
      <SelectGuests endDate = {endDate} startDate = {startDate} region = {region} desktop/>
      <span className = "router__error" id = "routerError"></span>
    </div>
  )
}

const MapStateToProps = (state) => {
  return {
    region: state.userSelectedRegion,
    datepickerFrom: state.datepicker.from,
    datepickerTo: state.datepicker.to,
    selectedGuestsOutput: state.selectedGuestsOutput
  }
}

export default connect(MapStateToProps, null)(Router);