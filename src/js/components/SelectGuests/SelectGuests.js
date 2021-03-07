import React, {useState} from "react";
import PlusIcon from "../../../img/plus.svg";
import MinusIcon from "../../../img/minus.svg";
import "./SelectGuests.scss";

export default (props) => {
  let {desktop, mobile} = props;
  const [adults, setAdults] = useState(1),
        [kids, setKids] = useState(1),
        [rooms, setRooms] = useState(1);
  return (
    <div className = "modalWindow selectGuests__wrapper" id = {desktop ? "selectGuests" : (mobile ? "selectGuestsMobile" : null)}>
      <div className = "selectGuests__option">
        <span className = "selectGuests__name">Взрослых</span>
        <div className = "selectGuests__value">
          <div className = "selectGuests__minus selectGuests__manageNumber">
            <button id = "adultsButton" onClick = {() => {
              if (adults >= 1) {
                if (adults == 1) {
                  document.getElementById("adultsButton").classList.add("selectGuests__numberButton_disabled");
                  document.querySelector("#adultsButton").disabled = true;
                }
                else {
                  document.getElementById("adultsButton").classList.remove("selectGuests__numberButton_disabled");
                  document.querySelector("#adultsButton").disabled = false;
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
                document.getElementById("adultsButton").classList.remove("selectGuests__numberButton_disabled");
                document.querySelector("#adultsButton").disabled = false;
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
            <button id = "kidsButton" onClick = {() => {
              if (kids >= 1) {
                if (kids == 1) {
                  document.getElementById("kidsButton").classList.add("selectGuests__numberButton_disabled");
                  document.querySelector("#kidsButton").disabled = true;
                }
                else {
                  document.getElementById("kidsButton").classList.remove("selectGuests__numberButton_disabled");
                  document.querySelector("#kidsButton").disabled = false;
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
                document.getElementById("kidsButton").classList.remove("selectGuests__numberButton_disabled");
                document.querySelector("#kidsButton").disabled = false;
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
          <div id = "roomsButton" onClick = {() => {
              if (rooms >= 1) {
                if (rooms == 1) {
                  document.getElementById("roomsButton").classList.add("selectGuests__numberButton_disabled");
                  document.querySelector("#roomsButton").disabled = true;
                }
                else {
                  document.getElementById("roomsButton").classList.remove("selectGuests__numberButton_disabled");
                  document.querySelector("#roomsButton").disabled = false;
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
                document.getElementById("roomsButton").classList.remove("selectGuests__numberButton_disabled");
                document.querySelector("#roomsButton").disabled = false;
              }
              setRooms(rooms + 1);
            }} className = "selectGuests__numberButton">
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}