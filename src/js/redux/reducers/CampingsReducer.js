import { GET_CAMPINGS_FAILURE, GET_CAMPINGS_REQUEST, GET_CAMPINGS_SUCCESS } from "../types/types";

const initialState = {
  isFetching: null,
  isUserLoggedIn: null,
  isUserInitializing: null,
  campings: [],
  currentCamping: null,
  campingsError: null,
  filterSettings: {
    WiFi: false,
    animals: false,
    electricity: false,
    food: false,
    isWater: false,
    kids: false,
    nonsmokeZone: false,
    parkSpace: false,
    peopleDisabilites: false,
    sleepSpace: false
  }
}

export default function CampingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPINGS_REQUEST:
      return {...state, isFetching: true}
    case GET_CAMPINGS_SUCCESS:
      return {...state, isFetching: false, campings: action.payload}
    case GET_CAMPINGS_FAILURE:
      return {...state, isFetching: false, campingsError: action.payload}
  }
}
