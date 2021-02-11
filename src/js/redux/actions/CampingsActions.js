import { database } from "../../firebase";
import { getCampingsByPageId } from "../../functions";
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
      dispatch({
        type: GET_CAMPINGS_FAILURE,
        payload: error.message
      })
    }

    if (errorMessage === null) {
      dispatch({
        type: GET_CAMPINGS_SUCCESS,
        payload: campingsList
      })
    }
  }
}