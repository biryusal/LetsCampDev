import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
import ReactPaginate from 'react-paginate';
import {Redirect, useLocation } from "react-router-dom";
import Header from "../Header";
import "./Campings.scss";
import Footer from "../Footer";
import MobileDownbar from "../MobileDownbar/MobileDownBar";
import CampingsList from "./CampingsList";
import { applyFiltersRedirect, getAmountOfCampings, getCampingsByPageId, getFilteredCampingsByPageId, resetFiltersRedirect } from "../../redux/actions/CampingsActions";
import SpecialFilter from "./Filters/SpecialFilter";

function Campings(props) {
  const {getCampingsByPageId, getAmountOfCampings, amountOfCampings, campings, resetFiltersRedirect, 
    filterApplied, getFilteredCampingsByPageId, currentFilteredCampings, isCampingsLoading} = props;
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(Number(location.pathname.match(/campings\/page\/(\d+)/)[1]));
  let filterRedirect = props.filterRedirect;

  useEffect(() => {
    getAmountOfCampings();
    getCampingsByPageId(pageNumber); 
  }, []);

  function changePageHandler(page) {
    setPageNumber(page.selected+1);
    if (filterApplied) {
      console.log(filterApplied);
      console.log(page.selected+1);
      getFilteredCampingsByPageId(page.selected+1, campings);
    }
    else {
      getCampingsByPageId(page.selected+1);
    } 
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".modalWindow") && !event.target.classList.contains("modalWindowButton")) {
      console.log("doesnt count");
      let modalWindows = document.getElementsByClassName("modalWindow"),
          modalWindowsButtons = document.getElementsByClassName("modalWindowButton");
      
      for (let i = 0; i < modalWindows.length; i++) {
        modalWindows[i].style["display"] = "none";
      }

      for (let k = 0; k < modalWindowsButtons.length; k++) {
        console.log(modalWindowsButtons[k].id + "_active");
        modalWindowsButtons[k].classList.remove(modalWindowsButtons[k].id + "_active");
      }
    }
  });

  function specialFilterSwitcher() {
    if (document.getElementById("specialFilter").style.display == "block") {
      document.getElementById("specialFilter").style.display = "none";
      document.getElementById("specialFilterButton").classList.remove("specialFilterButton_active");
    }
    else {
      document.getElementById("specialFilter").style.display = "block";
      document.getElementById("specialFilterButton").classList.add("specialFilterButton_active");
    }
  }
  
  if (filterRedirect && pageNumber != 1) {
    resetFiltersRedirect();
    setPageNumber(1);
    return <Redirect exact to = {"/campings/page/" + 1} ></Redirect>
  }

  return (
    <>
      <Redirect to = {"/campings/page/" + pageNumber}></Redirect>
      <Header isScrolled = {true}></Header>
      <main className = "container campings">
        <section className = "campings__wrapper">
          <h1 className = "campings__header">Кемпинги</h1>
          <div className = "campings__filters">
            <button onClick = {specialFilterSwitcher} id = "specialFilterButton" className = "campings__filter modalWindowButton">Специальные</button>
            <SpecialFilter />
            
          </div>
          <h2 className = "campings__subheader">Все кемпинги (всего: {filterApplied ? campings.length : amountOfCampings})</h2>
          {isCampingsLoading ? <div className = "campings__fetching"><ClipLoader color = "#AFAFAF"/></div>  : <div className = "campings__list">
            <CampingsList campings = {filterApplied && currentFilteredCampings ? currentFilteredCampings : campings} />
          </div>}
          <ReactPaginate 
              previousLabel = "Пред."
              nextLabel = "След."
              pageCount = {filterApplied ? Math.ceil(campings.length / 20) : Math.ceil(amountOfCampings / 20)} pageRangeDisplayed = {3} marginPagesDisplayed = {1}
              containerClassName = "paginate__wrapper"
              previousClassName = "paginate__link"
              nextClassName = "paginate__link"
              forcePage = {pageNumber - 1}
              disabledClassName = "paginate__link_disabled"
              activeClassName = "paginate__link_active"
              onPageChange = {changePageHandler}
            />
        </section>
      </main>
      <MobileDownbar />
      <Footer />
    </>
  )
}

const MapStateToProps = (state) => {
  return {
    campings: state.campings,
    amountOfCampings: state.amountOfCampings,
    filterRedirect: state.filterRedirect,
    filterApplied: state.filterApplied,
    currentFilteredCampings: state.currentFilteredCampings,
    isCampingsLoading: state.isCampingsLoading
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    getCampingsByPageId: (pageID) => dispatch(getCampingsByPageId(pageID)),
    getFilteredCampingsByPageId: (pageID, campings) => dispatch(getFilteredCampingsByPageId(pageID, campings)),
    getAmountOfCampings: () => dispatch(getAmountOfCampings()),
    resetFiltersRedirect: () => dispatch(resetFiltersRedirect())
  }
};

export default connect(MapStateToProps, MapDispatchToProps)(Campings);