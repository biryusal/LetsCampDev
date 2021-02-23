import React from "react";
import { connect } from "react-redux";
import { applyFilters, changeFilters, revokeSpecialFilters } from "../../../../redux/actions/CampingsActions";
import "./SpecialFilter.scss";

function SpecialFilter(props) {
  const {changeFilters, applyFilters, campingFilters, revokeSpecialFilters} = props;
  return(
    <div id = "specialFilter" className = "campingFilter__wrapper specialFilter__wrapper modalWindow">
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "WiFi" name = "WiFi"></input>
        <label htmlFor = "WiFi" className = "specialFilter__name">Wi-Fi</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "nonsmokeZone" name = "nonsmokeZone"></input>
        <label htmlFor = "nonsmokeZone" className = "specialFilter__name">Зона для некурящих</label>
      </div>
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
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "isWater" name = "isWater"></input>
        <label htmlFor = "isWater" className = "specialFilter__name">Вода</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "kids" name = "kids"></input>
        <label htmlFor = "kids" className = "specialFilter__name">Можно с детьми</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "parkSpace" name = "parkSpace"></input>
        <label htmlFor = "parkSpace" className = "specialFilter__name">Парковочные места</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "sleepSpace" name = "sleepSpace"></input>
        <label htmlFor = "sleepSpace" className = "specialFilter__name">Места для сна</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "peopleDisabilities" name = "peopleDisabilities"></input>
        <label htmlFor = "peopleDisabilities" className = "specialFilter__name">Для людей с ограниченными способностями</label>
      </div>
      <div className = "specialFilter__buttons">
        <button className = "specialFilter__button specialFilter__clearButton" onClick = {() => revokeSpecialFilters()}>Очистить</button>
        <button className = "specialFilter__button specialFilter__submitButton" onClick = {() => applyFilters(campingFilters)}>Сохранить</button>
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

