import React, {useState} from "react";
import PlusIcon from "../../../img/plus.svg";
import MinusIcon from "../../../img/minus.svg";
import { connect } from "react-redux";
import {setGuestsOutput} from "../../redux/actions/CampingsActions";
import "./SelectGuests.scss";

function SelectGuests(props) {
  let {desktop, mobile, setGuestsOutput} = props;
  const [adults, setAdults] = useState(1),
        [kids, setKids] = useState(1),
        [rooms, setRooms] = useState(1),
        [error, setError] = useState(null);

  function saveGuests() {
    let selectGuestsWindow = desktop ? document.getElementById("selectGuests") : document.getElementById("selectGuestsMobile");
    if ((adults != 0 && (adults != 0 || kids != 0) && rooms >= 1)) {
      setError(null);
      setGuestsOutput("Взрослых: " + adults + "; " + (kids ? ("Детей: " + kids + "; ") : "") + "Комнат: " + rooms);
      selectGuestsWindow.style.display = "none";
    }
    else {
      if (adults == 0 && kids != 0) {
        setError("Детям нельзя без сопровождения взрослых!"); 
      }
      else if (adults == 0 && kids == 0) {
        setError("Выберите хотя бы одного человека.");
      }
      else if (rooms == 0) {
        setError("Выберите количество комнат.");  
      } 
      else {
        setError("Проверьте валидацию формы.");  
      }
    }
  }

  return (
    <div className = "modalWindow selectGuests__wrapper" id = {desktop ? "selectGuests" : (mobile ? "selectGuestsMobile" : null)}>
      <div className = "selectGuests__option">
        <span className = "selectGuests__name">Взрослых</span>
        <div className = "selectGuests__value">
          <div className = "selectGuests__minus selectGuests__manageNumber">
            <button id = {desktop ? "adultsButtonDesktop" : "adultsButtonMobile"} onClick = {() => {
              if (adults >= 1) {
                if (adults == 1) {
                  document.getElementById("adultsButtonDesktop").classList.add("selectGuests__numberButton_disabled");
                  document.getElementById("adultsButtonMobile").classList.add("selectGuests__numberButton_disabled");
                  document.querySelector("#adultsButtonDesktop").disabled = true;
                  document.querySelector("#adultsButtonMobile").disabled = true;
                }
                else {
                  document.getElementById("adultsButtonDesktop").classList.remove("selectGuests__numberButton_disabled");
                  document.getElementById("adultsButtonMobile").classList.remove("selectGuests__numberButton_disabled");
                  document.querySelector("#adultsButtonDesktop").disabled = false;
                  document.querySelector("#adultsButtonMobile").disabled = false;
                }
                setAdults(adults - 1);
              }
              else {
                
              }
            }} className = "selectGuests__numberButton">
              <MinusIcon />
            </button>
          </div>
          <span className = "selectGuests__number">{adults}</span>
          <div className = "selectGuests__plus selectGuests__manageNumber">
            <button onClick = {() => {
              if (adults == 0) {
                document.getElementById("adultsButtonDesktop").classList.remove("selectGuests__numberButton_disabled");
                document.getElementById("adultsButtonMobile").classList.remove("selectGuests__numberButton_disabled");
                document.querySelector("#adultsButtonDesktop").disabled = false;
                document.querySelector("#adultsButtonMobile").disabled = false;
              }
              setAdults(adults + 1);
            }} className = "selectGuests__numberButton">
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
      <div className = "selectGuests__option">
        <span className = "selectGuests__name">Детей</span>
        <div className = "selectGuests__value">
          <div className = "selectGuests__minus selectGuests__manageNumber">
            <button id = {desktop ? "kidsButtonDesktop" : "kidsButtonMobile"} onClick = {() => {
              if (kids >= 1) {
                if (kids == 1) {
                  document.getElementById("kidsButtonDesktop").classList.add("selectGuests__numberButton_disabled");
                  document.getElementById("kidsButtonMobile").classList.add("selectGuests__numberButton_disabled");
                  document.querySelector("#kidsButtonDesktop").disabled = true;
                  document.querySelector("#kidsButtonMobile").disabled = true;
                }
                else {
                  document.getElementById("kidsButtonDesktop").classList.remove("selectGuests__numberButton_disabled");
                  document.getElementById("kidsButtonMobile").classList.remove("selectGuests__numberButton_disabled");
                  document.querySelector("#kidsButtonDesktop").disabled = false;
                  document.querySelector("#kidsButtonMobile").disabled = false;
                }
                setKids(kids - 1);
              }
            }} className = "selectGuests__numberButton">
              <MinusIcon />
            </button>
          </div>
          <span className = "selectGuests__number">{kids}</span>
          <div className = "selectGuests__plus selectGuests__manageNumber">
            <button onClick = {() => {
              if (kids == 0) {
                document.getElementById("kidsButtonDesktop").classList.remove("selectGuests__numberButton_disabled");
                document.getElementById("kidsButtonMobile").classList.remove("selectGuests__numberButton_disabled");
                document.querySelector("#kidsButtonDesktop").disabled = false;
                document.querySelector("#kidsButtonMobile").disabled = false;
              }
              setKids(kids + 1);
            }} className = "selectGuests__numberButton">
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
      <div className = "selectGuests__option">
        <span className = "selectGuests__name">Номеров</span>
        <div className = "selectGuests__value">
          <div id = {desktop ? "roomsButtonDesktop" : "roomsButtonMobile"} onClick = {() => {
              if (rooms >= 1) {
                if (rooms == 1) {
                  document.getElementById("roomsButtonDesktop").classList.add("selectGuests__numberButton_disabled");
                  document.getElementById("roomsButtonMobile").classList.add("selectGuests__numberButton_disabled");
                  document.querySelector("#roomsButtonDesktop").disabled = true;
                  document.querySelector("#roomsButtonMobile").disabled = true;
                }
                else {
                  document.getElementById("roomsButtonDesktop").classList.remove("selectGuests__numberButton_disabled");
                  document.getElementById("roomsButtonMobile").classList.remove("selectGuests__numberButton_disabled");
                  document.querySelector("#roomsButtonDesktop").disabled = false;
                  document.querySelector("#roomsButtonMobile").disabled = false;
                }
                setRooms(rooms - 1);
              }
            }} className = "selectGuests__numberButton">
            <button className = "selectGuests__numberButton">
              <MinusIcon />
            </button>
          </div>
          <span className = "selectGuests__number">{rooms}</span>
          <div className = "selectGuests__plus selectGuests__manageNumber">
            <button onClick = {() => {
              if (rooms == 0) {
                document.getElementById("roomsButtonDesktop").classList.remove("selectGuests__numberButton_disabled");
                document.getElementById("roomsButtonMobile").classList.remove("selectGuests__numberButton_disabled");
                document.querySelector("#roomsButtonDesktop").disabled = false;
                document.querySelector("#roomsButtonMobile").disabled = false;
              }
              setRooms(rooms + 1);
            }} className = "selectGuests__numberButton">
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
      <div className = "selectGuests__buttons">
        {desktop ? 
          <>
            <button className = "selectGuests__clearButton">Очистить</button>
            <button className = "selectGuests__goButton" onClick = {saveGuests}>Поехали!</button>
          </> : null}

        {mobile ? 
          <>
            <button className = "selectGuests__clearButton">Очистить</button>
            <button className = "selectGuests__saveButton" onClick = {saveGuests}>Сохранить</button>
          </> : null}
      </div>
      {error ? <span id = "selectGuestsError" className = "selectGuests__errorMessage">{error}</span> : null}
    </div>
  )
}

const MapDispatchToProps = (dispatch) => {
  return {
    setGuestsOutput: (output) => dispatch(setGuestsOutput(output))
  }
};

export default connect(null, MapDispatchToProps)(SelectGuests);