import React, {useState} from "react";
import {ru} from "date-fns/esm/locale";
import "./MobileRouter.scss";
import RegionIcon from "../../../../../img/map.svg";
import DateIcon from "../../../../../img/calendar.svg";
import GuestsIcon from "../../../../../img/guest.svg";
import RoomsIcon from "../../../../../img/door.svg";
import SelectCity from "../../../SelectCity";
import { connect } from "react-redux";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectGuests from "../../../SelectGuests";
import { addDays, DateToFormated } from "../../../../functions";
import { Redirect } from "react-router";

function MobileRouter(props) {
  let {region, selectedGuestsOutput} = props;

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [isRedirectToCampings, setRedirectToCampings] = useState(null);

  registerLocale("ru", ru);

  function handleDateChange(dateName, dateValue) {
    if (dateName === "startDateTime") {
      setStartDate(dateValue);
      setEndDate(dateValue);
    } else {
      setEndDate(dateValue);
    }
  }

  function goToTheCampings() {
    let error = document.getElementById("mobileRouterError");

    if (startDate && endDate && region && selectedGuestsOutput) {
      error.classList.remove("mobileRouter__error_active");
      error.innerHTML = null;
      setRedirectToCampings(true);
    }

    else {
      if (!(startDate && endDate)) {
        error.innerText = "Введите дату.";
      }
      else if (!region) {
        error.innerText = "Выберите регион для поездки.";
      }
      else if (!selectedGuestsOutput) {
        error.innerText = "Выберите гостей и комнаты.";
      }
      else {
        error.innerText = "Проверьте правильность заполнения формы.";
      }
      error.classList.add("mobileRouter__error_active");
    }
  }

  return(
    <>{isRedirectToCampings ? <Redirect exact to = {{pathname: "campings/page/1"}} /> : <div className = "mobileRouter__wrapper">
    <div className = "mobileRouter__option">
      <span className = "mobileRouter__inputName">Регион</span>
      <div className = {region ? "mobileRouter__select mobileRouter__select_active modalWindowButton" : "mobileRouter__select modalWindowButton"} id = "selectCityMobileButton">
        <span className = {region ? "mobileRouter__text mobileRouter__text_active" : "mobileRouter__text"}>{region ? region : "Выберите регион"}</span>
        <div className = "mobileRouter__input_background">
          <RegionIcon />
        </div>
      </div>
      <SelectCity mobile selectedRegion = {region ? region : null}/>
    </div>
    <div className = "mobileRouter__option">
      <span className = "mobileRouter__inputName">Дата заезда</span>
      <DatePicker
      minDate = {new Date()} value = {startDate} 
      
      id = "datapickerFromMobile"
  
      onCalendarOpen = {() => {
        document.getElementById("datapickerFromMobile").classList.add("mobileRouter__input_active");
       }}
       onCalendarClose = {() => {
         document.getElementById("datapickerFromMobile").classList.remove("mobileRouter__input_active");
        }}

      calendarClassName = "mobileRouter__calendar"
      
      customInput = {
        <div className = {startDate ? "mobileRouter__select mobileRouter__select_active" : "mobileRouter__select"}>
            <span className = {startDate ? "mobileRouter__text mobileRouter__text_active" : "mobileRouter__text"}>{startDate ? DateToFormated(startDate) : "Выберите дату заезда"}</span>
            <div className = "mobileRouter__input_background">
              <DateIcon />
            </div>
          </div>}
      locale = "ru" 
      selected = {startDate} 
      onChange = {date => handleDateChange("startDateTime", date)} />
    </div>
    <div className = "mobileRouter__option">
      <span className = "mobileRouter__inputName">Дата выезда</span>
      <DatePicker
      minDate = {startDate ? startDate : new Date()}
      value = {endDate}
      id = "datapickerToMobile"
      onCalendarOpen = {() => {
       document.getElementById("datapickerToMobile").classList.add("mobileRouter__input_active");
      }}
      onCalendarClose = {() => {
        document.getElementById("datapickerTo").classList.remove("mobileRouter__input_active");
       }}

      calendarClassName = "mobileRouter__calendar"

      customInput = {

          <div className = {endDate ? "mobileRouter__select mobileRouter__select_active" : "mobileRouter__select"}>
            <span className = {endDate ? "mobileRouter__text mobileRouter__text_active" : "mobileRouter__text"}>{endDate ? DateToFormated(endDate) : "Выберите дату выезда"}</span>
            <div className = "mobileRouter__input_background">
              <DateIcon />
            </div>
          </div>}
      locale = "ru" 
      selected = {endDate}
      onChange = {date => handleDateChange("endDateTime", date)} />
    </div>
    <div className = "mobileRouter__option">
      <SelectGuests mobile/>
      <span className = "mobileRouter__inputName">Количество гостей</span>
      <div className = {selectedGuestsOutput ? "mobileRouter__select mobileRouter__select_active modalWindowButton" : "mobileRouter__select modalWindowButton"} id = "selectGuestsMobileButton">
        <span className = {selectedGuestsOutput ? "mobileRouter__text mobileRouter__text_active" : "mobileRouter__text"}>{selectedGuestsOutput ? selectedGuestsOutput : "Выберите количество гостей"}</span>
        <div className = "mobileRouter__input_background">
          <GuestsIcon />
        </div>
      </div>
    </div>
    <div className = "mobileRouter__buttons">
      <button className = "mobileRouter__button mobileRouter__button_clear">Очистить</button>
      <button onClick = {goToTheCampings} className = "mobileRouter__button mobileRouter__button_go">Поехали!</button>
    </div>
    <span className = "mobileRouter__error" id = "mobileRouterError"></span>
  </div>}</>
    
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

export default connect(MapStateToProps, null)(MobileRouter);