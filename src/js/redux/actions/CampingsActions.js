import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { keys } from "regenerator-runtime";
import { database } from "../../firebase";
import { asyncGetAmountOfCampings, asyncGetCampingById, getCampingsByPageIdAndSize, revokeSpecialFiltersCheckboxes, getCampingByFilter, revokeAdditionalFiltersCheckboxes, getNameOfClickedRegion } from "../../functions";
import { APPLY_FILTERS_FAILURE, APPLY_FILTERS_REDIRECT, APPLY_FILTERS_REQUEST, APPLY_FILTERS_SUCCESS, CHANGE_FILTERS, GET_AMOUNT_OF_CAMPINGS_FAILURE, GET_AMOUNT_OF_CAMPINGS_REQUEST, GET_AMOUNT_OF_CAMPINGS_SUCCESS, GET_CAMPINGS_BY_PAGEID_FAILURE, GET_CAMPINGS_BY_PAGEID_REQUEST, GET_CAMPINGS_BY_PAGEID_SUCCESS, GET_CAMPING_BY_ID_FAILURE, GET_CAMPING_BY_ID_REQUEST, GET_CAMPING_BY_ID_SUCCESS, GET_FILTERED_CAMPINGS_BY_PAGEID_FAILURE, GET_FILTERED_CAMPINGS_BY_PAGEID_REQUEST, GET_FILTERED_CAMPINGS_BY_PAGEID_SUCCESS, RESET_FILTERS_REDIRECT, REVOKE_ADDITIONAL_FILTERS, REVOKE_FILTERS, REVOKE_SPECIAL_FILTERS, SET_SELECTED_REGION, UPDATE_AMOUNT_OF_CAMPINGS } from "../types/types"

export function getCampingsByPageId(pageID) {
  return async function(dispatch) {
    dispatch({
      type: GET_CAMPINGS_BY_PAGEID_REQUEST
    })
    
    let campingsList = [],
        errorMessage = null;
    
    try {
      campingsList = await getCampingsByPageIdAndSize(pageID);
    }

    catch(error) {
      errorMessage = error;
    }

    if (errorMessage === null) {
      dispatch({
        type: GET_CAMPINGS_BY_PAGEID_SUCCESS,
        payload: campingsList
      })
    }

    else {
      dispatch({
        type: GET_CAMPINGS_BY_PAGEID_FAILURE,
        payload: errorMessage
      })
    }
  }
}

export function getFilteredCampingsByPageId(pageID, campings, pageSize = 20) {
  return async function(dispatch) {
    dispatch({
      type: GET_FILTERED_CAMPINGS_BY_PAGEID_REQUEST
    })

    let currentCampings = [],
        errorMessage = null;
    
    try {
      for (let i = (pageID-1)*pageSize + (pageID-1); i < (pageID*pageSize + (pageID-1)); i++) {
        if (typeof campings[i] !== "undefined") {
          currentCampings.push(campings[i]);
        }
      }
    }

    catch(error) {
      errorMessage = error;
    }

    if (errorMessage === null) {
      dispatch({
        type: GET_FILTERED_CAMPINGS_BY_PAGEID_SUCCESS,
        payload: currentCampings
      })
    }

    else {
      dispatch({
        type: GET_FILTERED_CAMPINGS_BY_PAGEID_FAILURE,
        payload: errorMessage
      })
    }
  }
}

export function getCampingById(id) {
  return async function(dispatch) {
    let result,
        errorMessage = null;

    dispatch({
      type: GET_CAMPING_BY_ID_REQUEST
    })
    
    try {
      result = await asyncGetCampingById(id);
    }

    catch(e) {
      errorMessage = e.message;
    }

    if (errorMessage === null) {
      dispatch({
        type: GET_CAMPING_BY_ID_SUCCESS,
        payload: result
      })
    }

    else {
      dispatch({
        type: GET_CAMPING_BY_ID_FAILURE,
        payload: errorMessage
      })
    }
  }
}

export function getAmountOfCampings() {
  return async function(dispatch) {
    let result,
        errorMessage = null;

    dispatch({
      type: GET_AMOUNT_OF_CAMPINGS_REQUEST
    })

    try {
      result = await asyncGetAmountOfCampings();
    }

    catch(e) {
      errorMessage = e.message;
    }

    if (errorMessage === null) {
      dispatch({
        type: GET_AMOUNT_OF_CAMPINGS_SUCCESS,
        payload: result
      })
    }

    else {
      dispatch({
        type: GET_AMOUNT_OF_CAMPINGS_FAILURE,
        payload: errorMessage
      })
    }
  }
}

export function applyFilters(filters) {
  return async function(dispatch) {
    let filteredCampings = [],
        isFiltersRevoked = null,
        errorMessage = null;

    dispatch({
      type: APPLY_FILTERS_REQUEST
    })

    try {
      let amountOfFalseKeys = 0;

      for (let key in filters) {
        if (filters[key]) {
          let camps = await getCampingByFilter(key);
          if (filteredCampings.length == 0) {
            Object.keys(camps).forEach(function (key) {
              filteredCampings[key] = camps[key];
            });
          }
          else {
            let newArr = [];
            Object.keys(camps).forEach(function (key) {
              newArr[key] = camps[key];
            });
            for (let i = 0; i < newArr.length; i++) {
              if (typeof newArr[i] === "undefined") {
                delete filteredCampings[i];
              }
            }
          }
        }
        else {
          amountOfFalseKeys++;
        }
      }

      if (amountOfFalseKeys == Object.keys(filters).length) {
        isFiltersRevoked = true;
        filteredCampings = await getCampingsByPageIdAndSize(1);
      }

      else {
        filteredCampings = filteredCampings.filter(function (el) {
          return el != null;
        });
      }
    }

    catch(e) {
      errorMessage = e.message;
    }

    if (errorMessage === null) {
      dispatch({
        type: APPLY_FILTERS_SUCCESS,
        payload: filteredCampings
      });
      if (isFiltersRevoked) {
        dispatch({
          type: REVOKE_SPECIAL_FILTERS
        })
        dispatch({
          type: REVOKE_ADDITIONAL_FILTERS
        })
      }
      dispatch(applyFiltersRedirect("campings/page/1"));
      dispatch(getFilteredCampingsByPageId(1, filteredCampings));
    }

    else {
      dispatch({
        type: APPLY_FILTERS_FAILURE,
        payload: errorMessage
      })
    }
  }
}

export function changeFilters(e) {
  let value = document.getElementById(e.target.name).checked;
  return (dispatch) => {
    dispatch({
      type: CHANGE_FILTERS,
      payload: {
        [e.target.name]: value
      }
    })
  }
}

export function applyFiltersRedirect() {
  return {
    type: APPLY_FILTERS_REDIRECT
  }
}

export function resetFiltersRedirect() {
  return {
    type: RESET_FILTERS_REDIRECT
  }
}

export function updateAmountOfCampings(amount) {
  return {
    type: UPDATE_AMOUNT_OF_CAMPINGS,
    payload: amount
  }
}

export function revokeSpecialFilters() {
  return (dispatch) => {
    dispatch({
      type: REVOKE_SPECIAL_FILTERS
    })
    revokeSpecialFiltersCheckboxes();
  }
}

export function revokeAdditionalFilters() {
  return (dispatch) => {
    dispatch({
      type: REVOKE_ADDITIONAL_FILTERS
    })
    revokeAdditionalFiltersCheckboxes();
  }
}

export function setNameOfClickedRegion(e) {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_REGION,
      payload: getNameOfClickedRegion(e)
    })
  }
}