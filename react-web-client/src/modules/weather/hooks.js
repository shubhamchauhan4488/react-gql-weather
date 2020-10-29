import { useDispatch, useSelector } from 'react-redux';
import { fetchCityFromCoordinates, setWeatherData } from "./orchestration";
import { getCity, getVisibility, getHumidity, getTemperatureData, getWindSpeed, getWeatherSummaryDescription, getIsFetching } from "./selectors";
import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_WEATHER_QUERY } from "./constants";

export const useWeather = () => {
  const dispatch = useDispatch();
  const city = useSelector(getCity)
  const humidity = useSelector(getHumidity);
  const visibility = useSelector(getVisibility);
  const temperature = useSelector(getTemperatureData);
  const windSpeed = useSelector(getWindSpeed);
  const weatherSummaryDescription = useSelector(getWeatherSummaryDescription);
  const isFetching = useSelector(getIsFetching);

  const [getWeather, { loading, data, error }] = useLazyQuery(GET_WEATHER_QUERY);

  useEffect(() => {
    console.log('citydetected', city)
    getWeather({
      skip: !city,
      variables: { name: city },
    })
    data?.getCityByName?.weather && dispatch(setWeatherData(data?.getCityByName?.weather, loading, error))

  }, [city, getWeather, data?.getCityByName?.weather, dispatch, loading, error])

  return {
    city,
    humidity,
    visibility,
    temperature,
    windSpeed,
    weatherSummaryDescription,
    isFetching,
    dispatchFetchCityFromCoordinates: (lat, lng) => dispatch(fetchCityFromCoordinates(lat, lng))
  }
}