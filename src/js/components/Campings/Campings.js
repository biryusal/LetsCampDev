import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
import ReactPaginate from 'react-paginate';
import {Redirect, useLocation} from "react-router-dom";
import Header from "../Header";
import "./Campings.scss";
import Footer from "../Footer";
import MobileDownbar from "../MobileDownbar/MobileDownBar";
import { getCampings } from "../../redux/actions/CampingsActions";
import { getCampingsByPageId } from "../../functions";

function Campings(props) {

  useEffect(() => {
    getCampings(3)
  }, []);

  console.log(props);

  return (
    <>
      <Header isScrolled = {true}></Header>
      <main className = "container campings">
        <section className = "campings__wrapper">
          <h1 className = "campings__header">Кемпинги</h1>
          <div className = "campings__filters">
            <button className = "campings__filter">Специальные</button>
            <button className = "campings__filter">Места</button>
            <button className = "campings__filter">Цена</button>
            <button className = "campings__filter">Дополнительно</button>
            <button className = "campings__filter">Фильтры (6)</button>
          </div>
          <h2 className = "campings__subheader">Все кемпинги (всего: plugged)</h2>
          <div className = "campings__list">
            
          </div>
          <ReactPaginate 
            previousLabel = "Пред."
            nextLabel = "След."
            pageCount = {5} pageRangeDisplayed = {2} marginPagesDisplayed = {1}
            containerClassName = "paginate__wrapper"
            previousClassName = "paginate__link"
            nextClassName = "paginate__link"
            disabledClassName = "paginate__link_disabled"
            activeClassName = "paginate__link_active"
            />
        </section>
        <MobileDownbar />
      </main>
      <Footer />
    </>
  )
}
const MapStateToProps = state => {
  return {
    state
  }
}

const MapDispatchToProps = dispatch => ({
  getCampings: (pageID) => dispatch(getCampings(pageID))
});

export default connect(MapStateToProps, MapDispatchToProps)(Campings);