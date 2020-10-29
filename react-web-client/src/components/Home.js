import React, { useEffect, useState } from "react";
import { useWeather } from "../modules/weather/hooks";
// import { useLatLng } from "../globals/customHooks/location";
import logo from './../logo.svg';
import { kelvinToCelcius } from "../globals/utilities/conversions";
import { getLatLng } from "../globals/utilities/location";
// import { useLazyQuery } from "@apollo/client";
// import { GET_WEATHER_QUERY } from "../modules/weather/constants";

export const Home = () => {

  const [location, setLocation] = useState({
    lat: '',
    lng: ''
  });
  const {
    city,
    humidity,
    visibility,
    temperature,
    windSpeed,
    weatherSummaryDescription,
    isFetching,
    dispatchFetchCityFromCoordinates,
  } = useWeather();


  // const { loading, data, error } = useQuery(GET_WEATHER_QUERY, {
  //   skip: !city,
  //   variables: { name: city },
  //   notifyOnNetworkStatusChange: true
  // });

  // const [getWeather, { loading, data, error }] = useLazyQuery(GET_WEATHER_QUERY)

  useEffect(() => {
    getLatLng(setLocation);
  }, [])

  useEffect(() => {
    if (!location || location?.lat === '' || location?.lng === '') return
    dispatchFetchCityFromCoordinates(location?.lat, location?.lng);
    /** Hook on city change to get whether data */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const handleRefresh = (e) => {
    e.preventDefault()
    getLatLng(setLocation);
    if (!location || location?.lat === '' || location?.lng) return;
    console.log('calling for city')
    /** Hook on city change to get whether data */
    dispatchFetchCityFromCoordinates(location?.lat, location?.lng)
  };

  // console.log('isFetching loading', isFetching, loading)
  const showLoader = isFetching || false
  return (
    <>
      {showLoader ?
        <img src={logo} className="App-logo" alt="logo" /> :
        <div className="container" >
          <div className="row">
            <div className="col-sm-12">
              <div className="round">
                <label>Wind</label>
                <br />
                {windSpeed} kmph
               </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-6">
              <div className="round">
                <label>Max Temp</label>
                <br />
                {kelvinToCelcius(temperature?.max)}°C
              </div>
            </div>
            <div className="col-6">
              <div className="round">
                <label>Min Temp</label>
                <br />
                {kelvinToCelcius(temperature?.min)}°C
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-12">
              {kelvinToCelcius(temperature?.actual)}°C
              <br />
              {city}
              <br />
              {weatherSummaryDescription}
              {!isFetching &&
                <div className="col-">
                  <button
                    onClick={handleRefresh}
                    type="button" className="btn btn-light"
                    disabled={isFetching}
                  >
                    Refresh
                  </button>
                </div>
              }
            </div>
          </div>


          <div className="row justify-content-between align-items-center">
            <div className="col-6">
              <div className="round" >
                <label>Visibility</label>
                <br />
                {visibility / 1000} km
              </div>
            </div>
            <div className="col-6">
              <div className="round" >
                <label>Humidity</label>
                <br />
                {humidity}%
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-12">
              <div className="round">
                <label>Feels Like</label>
                <br />
                {kelvinToCelcius(temperature?.feelsLike)}°C
              </div>
            </div>
          </div>
        </div>}
    </>
  );
};

