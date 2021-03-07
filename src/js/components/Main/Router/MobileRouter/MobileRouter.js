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
import { addDays } from "date-fns";
import SelectGuests from "../../../SelectGuests";

function MobileRouter(props) {
  let {region, datePickerFrom, datePickerTo} = props;
  const [startDate, setStartDate] = useState(new Date());
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
  
  return( 
    <div className = "mobileRouter__wrapper">
      <div className = "mobileRouter__option">
        <span className = "mobileRouter__inputName">Регион</span>
        <div className = "mobileRouter__select modalWindowButton" id = "selectCityMobileButton">
          <span className = "mobileRouter__text">{region ? region : "Выберите регион"}</span>
          <div className = "mobileRouter__input_background">
            <RegionIcon />
          </div>
        </div>
        <SelectCity mobile selectedRegion = {region ? region : null}/>
      </div>
      <DatePicker
      minDate = {new Date()} value = {startDate} 
      
      id = "datapickerFromMobile"

      onCalendarOpen = {() => {
        document.getElementById("datapickerFromMobile").classList.add("mobileRouter__input_active");
       }}
       onCalendarClose = {() => {
         document.getElementById("datapickerFromMobile").classList.remove("mobileRouter__input_active");
        }}

      customInput = {
        <div className = "mobileRouter__option mobileRouter__option_datepicker">
          <span className = "mobileRouter__inputName">Дата заезда</span>
          <div className = "mobileRouter__select">
            <span className = "mobileRouter__text">Выберите дату заезда</span>
            <div className = "mobileRouter__input_background">
              <DateIcon />
            </div>
          </div>
        </div>}
      locale = "ru" 
      selected = {startDate} 
      onChange = {date => handleDateChange("startDateTime", date)} />

      <DatePicker
      value = {endDate}
      id = "datapickerToMobile"
      onCalendarOpen = {() => {
       document.getElementById("datapickerToMobile").classList.add("mobileRouter__input_active");
      }}
      onCalendarClose = {() => {
        document.getElementById("datapickerTo").classList.remove("mobileRouter__input_active");
       }}
      customInput = {
        <div className = "mobileRouter__option mobileRouter__option_datepicker">
          <span className = "mobileRouter__inputName">Дата заезда</span>
          <div className = "mobileRouter__select">
            <span className = "mobileRouter__text">Выберите дату заезда</span>
            <div className = "mobileRouter__input_background">
              <DateIcon />
            </div>
          </div>
        </div>}
      locale = "ru" 
      selected = {endDate}
      minDate = {startDate}
      onChange = {date => handleDateChange("endDateTime", date)} />

      <div className = "mobileRouter__option">
        <span className = "mobileRouter__inputName">Количество гостей</span>
        <div className = "mobileRouter__select modalWindowButton" id = "selectGuestsMobileButton">
          <span className = "mobileRouter__text">Выберите количество гостей</span>
          <div className = "mobileRouter__input_background">
            <GuestsIcon />
          </div>
          <SelectGuests mobile/>
        </div>
      </div>
      
      <div className = "mobileRouter__option">
        <span className = "mobileRouter__inputName">Количество комнат</span>
        <div className = "mobileRouter__select">
          <span className = "mobileRouter__text">Выберите количество комнат</span>
          <div className = "mobileRouter__input_background">
            <RoomsIcon />
          </div>
        </div>
      </div>
      <div className = "mobileRouter__buttons">
        <button className = "mobileRouter__button mobileRouter__button_clear">Очистить</button>
        <button className = "mobileRouter__button mobileRouter__button_go">Поехали!</button>
      </div>
    </div>
  )
}

const MapStateToProps = (state) => {
  return {
    region: state.userSelectedRegion,
    datepickerFrom: state.datepicker.from,
    datepickerTo: state.datepicker.to
  }
}

export default connect(MapStateToProps, null)(MobileRouter);