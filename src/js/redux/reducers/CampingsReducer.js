import { APPLY_FILTERS_FAILURE, APPLY_FILTERS_REDIRECT, APPLY_FILTERS_REQUEST, APPLY_FILTERS_SUCCESS, CHANGE_FILTERS, GET_AMOUNT_OF_CAMPINGS_FAILURE, GET_AMOUNT_OF_CAMPINGS_REQUEST, GET_AMOUNT_OF_CAMPINGS_SUCCESS, GET_CAMPINGS_BY_PAGEID_FAILURE, GET_CAMPINGS_BY_PAGEID_REQUEST, GET_CAMPINGS_BY_PAGEID_SUCCESS, GET_CAMPING_BY_ID_FAILURE, GET_CAMPING_BY_ID_REQUEST, GET_CAMPING_BY_ID_SUCCESS, GET_FILTERED_CAMPINGS_BY_PAGEID_FAILURE, GET_FILTERED_CAMPINGS_BY_PAGEID_REQUEST, GET_FILTERED_CAMPINGS_BY_PAGEID_SUCCESS, RESET_FILTERS_REDIRECT, REVOKE_ADDITIONAL_FILTERS, REVOKE_SPECIAL_FILTERS, SET_SELECTED_REGION, UPDATE_AMOUNT_OF_CAMPINGS } from "../types/types";

const initialState = {
  isUserLoggedIn: null,
  isUserInitializing: null,
  campings: [],
  currentCamping: null,
  currentFilteredCampings: null,
  campingsError: null,
  isAmountOfCampingsFetching: null,
  amountOfCampings: null,
  amountOfCampingsError: null,
  isCampingsLoading: null,
  filtersError: null,
  filterApplied: null,
  filterRedirect: null,
  campingFilters: {
    WiFi: false,
    animals: false,
    electricity: false,
    food: false,
    isWater: false,
    kids: false,
    nonsmokeZone: false,
    parkSpace: false,
    peopleDisabilities: false,
    sleepSpace: false
  }
}

export default function CampingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPINGS_BY_PAGEID_REQUEST:
      return {...state, isCampingsLoading: true}
    case GET_CAMPINGS_BY_PAGEID_SUCCESS:
      return {...state, isCampingsLoading: false, campings: action.payload}
    case GET_CAMPINGS_BY_PAGEID_FAILURE:
      return {...state, isCampingsLoading: false, campingsError: action.payload}
    case GET_FILTERED_CAMPINGS_BY_PAGEID_REQUEST:
      return {...state, isFilterApplying: true}
    case GET_FILTERED_CAMPINGS_BY_PAGEID_SUCCESS:
      return {...state, isFilterApplying: false, currentFilteredCampings: action.payload}
    case GET_FILTERED_CAMPINGS_BY_PAGEID_FAILURE:
      return {...state, isFilterApplying: false, campingsError: action.payload}
    case GET_CAMPING_BY_ID_REQUEST:
      return {...state, isCampingsLoading: true, campingsError: null}
    case GET_CAMPING_BY_ID_SUCCESS:
      return {...state, isCampingsLoading: false, campingsError: null, currentCamping: action.payload}
    case GET_CAMPING_BY_ID_FAILURE:
      return {...state, isCampingsLoading: false, campingsError: action.payload}
    case GET_AMOUNT_OF_CAMPINGS_REQUEST:
      return {...state, isAmountOfCampingsFetching: true}
    case GET_AMOUNT_OF_CAMPINGS_SUCCESS:
      return {...state, isAmountOfCampingsFetching: false, amountOfCampings: action.payload}
    case GET_AMOUNT_OF_CAMPINGS_FAILURE:
      return {...state, isAmountOfCampingsFetching: false, amountOfCampingsError: action.payload}
    case UPDATE_AMOUNT_OF_CAMPINGS:
      return {...state, amountOfCampings: action.payload}
    case CHANGE_FILTERS:
      return {...state, campingFilters: Object.assign({}, state.campingFilters, action.payload) }
    case REVOKE_SPECIAL_FILTERS:
      return {...state, campingFilters: {
        animals: false,
        electricity: false,
        food: false,
        isWater: false,
        kids: false,
        parkSpace: false,
      }, filterApplied: false}
    case REVOKE_ADDITIONAL_FILTERS:
      return {...state, campingFilters: {
        WiFi: false,
        nonsmokeZone: false,
        peopleDisabilities: false,
        sleepSpace: false
      }, filterApplied: false}
    case APPLY_FILTERS_REDIRECT:
      return {...state, filterRedirect: true}
    case APPLY_FILTERS_REQUEST:
      return {...state, isCampingsLoading: true}
    case APPLY_FILTERS_SUCCESS:
      return {...state, campings: action.payload, isCampingsLoading: false, filterApplied: true}
    case APPLY_FILTERS_FAILURE:
      return {...state, isCampingsLoading: false, filtersError: action.payload, filterApplied: false}
    case RESET_FILTERS_REDIRECT:
      return {...state, filterRedirect: null}
    case SET_SELECTED_REGION:
      return {...state, userSelectedRegion: action.payload}
    default:
      return state;
  }
}


