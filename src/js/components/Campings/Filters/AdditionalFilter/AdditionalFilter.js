import React from "react";
import { connect } from "react-redux";
import { applyFilters, changeFilters, revokeAdditionalFilters} from "../../../../redux/actions/CampingsActions";
import "./AdditionalFilter.scss";

function AdditionalFilter(props) {
  const {changeFilters, applyFilters, campingFilters, revokeAdditionalFilters} = props;
  return(
    <div id = "additionalFilter" className = "campingFilter__wrapper specialFilter__wrapper modalWindow">
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "WiFi" name = "WiFi"></input>
        <label htmlFor = "WiFi" className = "specialFilter__name">Wi-Fi</label>
      </div>
      <div className = "specialFilter__filter">
        <input onChange = {changeFilters} className = "specialFilter__checkbox" type = "checkbox" id = "nonsmokeZone" name = "nonsmokeZone"></input>
        <label htmlFor = "nonsmokeZone" className = "specialFilter__name">Зона для некурящих</label>
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
        <button className = "specialFilter__button specialFilter__clearButton" onClick = {() => revokeAdditionalFilters()}>Очистить</button>
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
  revokeAdditionalFilters: () => dispatch(revokeAdditionalFilters())
});

export default connect(MapStateToProps, MapDispatchToProps)(AdditionalFilter);

