import { database } from "../../firebase";
import { getAsyncData } from "../../functions";
import { GET_CAMPINGS_FAILURE, GET_CAMPINGS_REQUEST, GET_CAMPINGS_SUCCESS } from "../types/types"

export function getCampings(pageID) {
  return async function(dispatch) {
    dispatch({
      type: GET_CAMPINGS_REQUEST
    })
    
    let campingsList = null,
        errorMessage = null;
    
    try {
      campingsList = await getCampingsByPageId(pageID);
    }

    catch(error) {
      errorMessage = error.message;
    }

    if (errorMessage === null) {
      dispatch({
        type: GET_CAMPINGS_SUCCESS,
        payload: campingsList
      })
    }

    else {
      dispatch({
        type: GET_CAMPINGS_FAILURE,
        payload: errorMessage
      })
    }
  }
}

async function getCampingsByPageId(pageID, pageSize = 20) {    
  const promises = [];

  for (let i = (pageID-1)*20 + (pageID-1); i < (pageID*20 + (pageID-1)); i++) {
    promises.push(getAsyncData(i))
  }

  return Promise.all(promises)
    .then((results) => results)
}
