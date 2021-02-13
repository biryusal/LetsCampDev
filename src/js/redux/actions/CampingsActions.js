import { asyncGetAmountOfCampings, asyncGetCampingById, getCampingsByPageIdAndSize } from "../../functions";
import { GET_AMOUNT_OF_CAMPINGS_FAILURE, GET_AMOUNT_OF_CAMPINGS_REQUEST, GET_AMOUNT_OF_CAMPINGS_SUCCESS, GET_CAMPINGS_BY_PAGEID_FAILURE, GET_CAMPINGS_BY_PAGEID_REQUEST, GET_CAMPINGS_BY_PAGEID_SUCCESS, GET_CAMPING_BY_ID_FAILURE, GET_CAMPING_BY_ID_REQUEST, GET_CAMPING_BY_ID_SUCCESS } from "../types/types"

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