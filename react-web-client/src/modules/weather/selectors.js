import { createSelector } from "@reduxjs/toolkit";

export const getCity = state => state.weather?.city;
export const getHumidity = state => state.weather?.data?.clouds?.humidity;
export const getVisibility = state => state.weather?.data?.clouds?.visibility;
export const getTemperatureData = state => state.weather?.data?.temperature;
export const getWeatherSummaryDescription = state => state.weather?.data?.summary?.description;
export const getWindSpeed = state => state.weather?.data?.wind?.speed;
export const getWeather = state => state.weather;
export const getIsFetching = createSelector(
  getWeather,
  weather => weather?.isFetching
);