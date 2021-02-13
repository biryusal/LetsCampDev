import { GET_AMOUNT_OF_CAMPINGS_FAILURE, GET_AMOUNT_OF_CAMPINGS_REQUEST, GET_AMOUNT_OF_CAMPINGS_SUCCESS, GET_CAMPINGS_BY_PAGEID_FAILURE, GET_CAMPINGS_BY_PAGEID_REQUEST, GET_CAMPINGS_BY_PAGEID_SUCCESS, GET_CAMPING_BY_ID_FAILURE, GET_CAMPING_BY_ID_REQUEST, GET_CAMPING_BY_ID_SUCCESS } from "../types/types";

const initialState = {
  isFetching: null,
  isUserLoggedIn: null,
  isUserInitializing: null,
  campings: [],
  currentCamping: null,
  campingsError: null,
  isAmountOfCampingsFetching: null,
  amountOfCampings: null,
  amountOfCampingsError: null,
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
    case GET_CAMPINGS_BY_PAGEID_REQUEST:
      return {...state, isFetching: true}
    case GET_CAMPINGS_BY_PAGEID_SUCCESS:
      return {...state, isFetching: false, campings: action.payload}
    case GET_CAMPINGS_BY_PAGEID_FAILURE:
      return {...state, isFetching: false, campingsError: action.payload}
    case GET_CAMPING_BY_ID_REQUEST:
      return {...state, isFetching: true, campingsError: null}
    case GET_CAMPING_BY_ID_SUCCESS:
      return {...state, isFetching: false, campingsError: null, currentCamping: action.payload}
    case GET_CAMPING_BY_ID_FAILURE:
      return {...state, isFetching: false, campingsError: action.payload}
    case GET_AMOUNT_OF_CAMPINGS_REQUEST:
      return {...state, isAmountOfCampingsFetching: true}
    case GET_AMOUNT_OF_CAMPINGS_SUCCESS:
      return {...state, isAmountOfCampingsFetching: false, amountOfCampings: action.payload}
    case GET_AMOUNT_OF_CAMPINGS_FAILURE:
      return {...state, isAmountOfCampingsFetching: false, amountOfCampingsError: action.payload}
    default:
      return state;
  }
}
