import React from "react";
import { connect } from "react-redux";
import { applyFilters, changeFilters, revokeSpecialFilters } from "../../../../redux/actions/CampingsActions";
import "./SpecialFilter.scss";

function SpecialFilter(props) {
  const {changeFilters, campingFilters, applyFilters, revokeSpecialFilters} = props;

  function saveFilters(filterID, campingsFilters) {
    let filter = document.getElementById(filterID);
    let filterButton = document.getElementById(filterID + "Button");
    filter.style.display = "none";
    filterButton.classList.remove(filterID + "Button_active");
    applyFilters(campingsFilters);
  }

  return(
    <div id = "specialFilter" className = "campingFilter__wrapper specialFilter__wrapper modalWindow">
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "animals" name = "animals"></input>
        <label htmlFor = "animals" className = "specialFilter__name">Можно с животными</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "electricity" name = "electricity"></input>
        <label htmlFor = "electricity" className = "specialFilter__name">Электричество</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "food" name = "food"></input>
        <label htmlFor = "food" className = "specialFilter__name">Еда</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "parkSpace" name = "parkSpace"></input>
        <label htmlFor = "parkSpace" className = "specialFilter__name">Парковочные места</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "isWater" name = "isWater"></input>
        <label htmlFor = "isWater" className = "specialFilter__name">Вода</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "kids" name = "kids"></input>
        <label htmlFor = "kids" className = "specialFilter__name">Можно с детьми</label>
      </div>
      <div className = "specialFilter__buttons">
        <button className = "specialFilter__button specialFilter__clearButton" onClick = {() => revokeSpecialFilters()}>Очистить</button>
        <button className = "specialFilter__button specialFilter__submitButton" onClick = {() => saveFilters("specialFilter", campingFilters)}>Сохранить</button>
      </div>
    </div>
  )
}

const MapStateToProps = state => ({
  campingFilters: state.campingFilters
})

const MapDispatchToProps = dispatch => ({
  changeFilters: (e) => dispatch(changeFilters(e)),
  applyFilters: (campingFilters) => dispatch(applyFilters(campingFilters)),
  revokeSpecialFilters: () => dispatch(revokeSpecialFilters())
});

export default connect(MapStateToProps, MapDispatchToProps)(SpecialFilter);

