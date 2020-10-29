import weatherApi from "./api";
import { weatherActions } from "./slice";

export const fetchCityFromCoordinates = (lat, long) => async (dispatch, getState) => {
  dispatch(weatherActions.FETCH_CITY_REQUEST());
  try {
    // console.log('calling api', lat, long)
    const { data } = await weatherApi.tryFetchCityFromCoordinates(lat, long);
    dispatch(weatherActions.FETCH_CITY_SUCCESS());
    dispatch(weatherActions.SET_CITY(data?.city));
  } catch (e) {
    dispatch(weatherActions.FETCH_CITY_FAILURE('Failed to fetch city'));
  }
};

export const setWeatherData = (data, loading = false, error = '') => async (dispatch, getState) => {
  dispatch(weatherActions.SET_WEATHER_DATA({ data, loading, error }));
}