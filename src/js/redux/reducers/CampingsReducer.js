import { GET_CAMPINGS_REQUEST } from "../types/types";

const initialState = {
  isFetching: null,
  isUserLoggedIn: null,
  isUserInitializing: null,
  campings: [],
  currentCamping: null,
  error: null,
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
  }
}