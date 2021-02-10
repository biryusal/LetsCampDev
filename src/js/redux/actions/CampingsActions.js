import { GET_CAMPINGS_REQUEST } from "../types/types"

export function getCampings() {
  return function(dispatch) {
    dispatch({
      type: GET_CAMPINGS_REQUEST
    })
  }
}