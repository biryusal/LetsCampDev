import React from "react";
import { connect } from "react-redux";
import { setNameOfClickedRegion } from "../../redux/actions/CampingsActions";
import "./SelectCity.scss";

function SelectCity(props) {
  let {setNameOfClickedRegion, selectedRegion} = props;
  return (
    <div onClick = {(e) => setNameOfClickedRegion(e)} name="region" className = "region modalWindow" id="selectCity">
			<span className = "region__header">{selectedRegion ? selectedRegion : "Выберите регион"}</span>
    	<option className = "region__option" value="Адыгея">Республика Адыгея</option>
    	<option className = "region__option" value="Алтай">Республика Алтай </option>
    	<option className = "region__option" value="Башкортостан">Республика Башкортостан </option>
    	<option className = "region__option" value="Бурятия">Республика Бурятия </option>
    	<option className = "region__option" value="Дагестан">Республика Дагестан </option>
    	<option className = "region__option" value="Ингушетия">Республика Ингушетия </option>
    	<option className = "region__option" value="Кабардино-Балкария">Кабардино-Балкарская Республика</option>
    	<option className = "region__option" value="Калмыкия">Республика Калмыкия </option>
    	<option className = "region__option" value="Карачаево-Черкессия">Карачаево-Черкесская Республика</option>
    	<option className = "region__option" value="Карелия">Республика Карелия </option>
    	<option className = "region__option" value="Коми">Республика Коми </option>
    	<option className = "region__option" value="Марий Эл">Республика Марий Эл </option>
    	<option className = "region__option" value="Мордовия">Республика Мордовия</option>
    	<option className = "region__option" value="Саха (Якутия)">Республика Саха (Якутия) </option>
    	<option className = "region__option" value="Северная Осетия - Алания">Республика Северная Осетия - Алания </option>
    	<option className = "region__option" value="Татарстан">Республика Татарстан</option>
    	<option className = "region__option" value="Тыва">Республика Тыва </option>
    	<option className = "region__option" value="Удмуртская">Удмуртская Республика </option>
    	<option className = "region__option" value="Хакасия">Республика Хакасия </option>
    	<option className = "region__option" value="Чеченская">Чеченская Республика</option>
    	<option className = "region__option" value="Чувашская Республика">Чувашская Республика</option>
    	<option className = "region__option" value="Алтайский край">Алтайский край</option>
    	<option className = "region__option" value="Забайкальский край">Забайкальский край</option>
    	<option className = "region__option" value="Камчатский край">Камчатский край</option>
    	<option className = "region__option" value="Краснодарский край">Краснодарский край</option>
    	<option className = "region__option" value="Красноярский край">Красноярский край</option>
    	<option className = "region__option" value="Пермский край">Пермский край</option>
    	<option className = "region__option" value="Приморский край">Приморский край</option>
    	<option className = "region__option" value="Ставропольский край">Ставропольский край</option>
    	<option className = "region__option" value="Хабаровский край">Хабаровский край</option>
    	<option className = "region__option" value="Амурская область">Амурская область</option>
    	<option className = "region__option" value="Архангельская область">Архангельская область</option>
    	<option className = "region__option" value="Астраханская область">Астраханская область</option>
    	<option className = "region__option" value="Белгородская область">Белгородская область</option>
    	<option className = "region__option" value="Брянская область">Брянская область </option>
    	<option className = "region__option" value="Владимирская область">Владимирская область </option>
    	<option className = "region__option" value="Волгоградская область">Волгоградская область </option>
    	<option className = "region__option" value="Вологодская область">Вологодская область </option>
    	<option className = "region__option" value="Воронежская область">Воронежская область </option>
    	<option className = "region__option" value="Ивановская область">Ивановская область </option>
    	<option className = "region__option" value="Иркутская область">Иркутская область </option>
    	<option className = "region__option" value="Калининградская область">Калининградская область</option>
    	<option className = "region__option" value="Калужская область">Калужская область </option>
    	<option className = "region__option" value="Кемеровская область">Кемеровская область </option>
    	<option className = "region__option" value="Кировская область">Кировская область </option>
    	<option className = "region__option" value="Костромская область">Костромская область </option>
    	<option className = "region__option" value="Курганская область">Курганская область </option>
    	<option className = "region__option" value="Курская область">Курская область </option>
    	<option className = "region__option" value="Ленинградская область">Ленинградская область </option>
    	<option className = "region__option" value="Липецкая область">Липецкая область </option>
    	<option className = "region__option" value="Магаданская область">Магаданская область</option>
    	<option className = "region__option" value="Московская область">Московская область </option>
    	<option className = "region__option" value="Мурманская область">Мурманская область </option>
    	<option className = "region__option" value="Нижегородская область">Нижегородская область </option>
    	<option className = "region__option" value="Новгородская область">Новгородская область </option>
    	<option className = "region__option" value="Новосибирская область">Новосибирская область </option>
    	<option className = "region__option" value="Омская область">Омская область</option>
    	<option className = "region__option" value="Оренбургская область">Оренбургская область </option>
    	<option className = "region__option" value="Орловская область">Орловская область </option>
    	<option className = "region__option" value="Пензенская область">Пензенская область </option>
    	<option className = "region__option" value="Псковская область">Псковская область </option>
    	<option className = "region__option" value="Ростовская область">Ростовская область </option>
    	<option className = "region__option" value="Рязанская область">Рязанская область </option>
    	<option className = "region__option" value="Самарская область">Самарская область </option>
    	<option className = "region__option" value="Саратовская область">Саратовская область </option>
    	<option className = "region__option" value="Сахалинская область">Сахалинская область </option>
    	<option className = "region__option" value="Свердловская область">Свердловская область </option>
    	<option className = "region__option" value="Смоленская область">Смоленская область </option>
    	<option className = "region__option" value="Тамбовская область">Тамбовская область </option>
    	<option className = "region__option" value="Тверская область">Тверская область </option>
    	<option className = "region__option" value="Томская область">Томская область </option>
    	<option className = "region__option" value="Тульская область">Тульская область</option>
    	<option className = "region__option" value="Тюменская область">Тюменская область </option>
    	<option className = "region__option" value="Ульяновская область">Ульяновская область </option>
    	<option className = "region__option" value="Челябинская область">Челябинская область </option>
    	<option className = "region__option" value="Ярославская область">Ярославская область</option>
    	<option className = "region__option" value="Москва">Москва</option>
    	<option className = "region__option" value="Санкт-Петербург">Санкт-Петербург</option>
    	<option className = "region__option" value="Еврейская АО">Еврейская АО</option>
    	<option className = "region__option" value="Ненецкий АО">Ненецкий АО</option>
    	<option className = "region__option" value="Ханты-Мансийский АО">Ханты-Мансийский АО</option>
    	<option className = "region__option" value="Чукотский АО">Чукотский АО</option>
    	<option className = "region__option" value="Ямало-Ненецкий АО">Ямало-Ненецкий АО</option>
    </div>
  )
}

const MapDispatchToProps = (dispatch) => {
	return({
		setNameOfClickedRegion: (e) => dispatch(setNameOfClickedRegion(e))
	})
}

export default connect(null, MapDispatchToProps)(SelectCity);