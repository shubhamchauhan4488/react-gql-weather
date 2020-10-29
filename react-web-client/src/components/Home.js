import React, { useEffect, useState } from "react";
import { useWeather, useCity } from "../modules/weather/hooks";
import logo from './../logo.svg';
import { kelvinToCelcius } from "../globals/utilities/conversions";
import { getLatLng } from "../globals/utilities/location";

export const Home = () => {
  const [location, setLocation] = useState({ lat: '', lng: '' });
  const {
    humidity,
    visibility,
    temperature,
    windSpeed,
    weatherSummaryDescription,
    isFetching,
  } = useWeather();

  const {
    city,
    dispatchFetchCityFromCoordinates,
  } = useCity()

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
    /** Hook on city change to get whether data */
    dispatchFetchCityFromCoordinates(location?.lat, location?.lng)
  };

  return (
    <>
      {isFetching ?
        <img src={logo} className="app-logo" alt="logo" /> :
        <div className="container" >
          <div className="row">
            <div className="col-sm-12">
              <div className="round-container">
                <label htmlFor='wind-speed'>Wind</label>
                <br />
                <span id='wind-speed'>{windSpeed} kmph</span>
              </div>
            </div>
          </div>

          <div className="row justify-content-around-container">
            <div className="col-6">
              <div className="round-container">
                <label htmlFor='temp-max'>Max °C</label>
                <br />
                <span id='temp-max'>{kelvinToCelcius(temperature?.max)}°C</span>
              </div>
            </div>
            <div className="col-6">
              <div className="round-container">
                <label htmlFor='temp-min'>Min °C</label>
                <br />
                <span id='temp-min'>{kelvinToCelcius(temperature?.min)}°C</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <span id='temp-actual'>{kelvinToCelcius(temperature?.actual)}°C</span><br />
              <span id='city'>{city}</span><br />
              <span id='weather-summary'>{weatherSummaryDescription}</span>
              {!isFetching &&
                <div className="col-">
                  <button
                    id='reload-btn'
                    onClick={handleRefresh}
                    type="button" className="btn btn-light"
                    disabled={isFetching}
                  >
                    Reload
                  </button>
                </div>
              }
            </div>
          </div>

          <div className="row justify-content-between align-items-center">
            <div className="col-6">
              <div className="round-container" >
                <label htmlFor='visibility'>Visibility</label><br />
                <span id='visibility'>{visibility / 1000} km</span>
              </div>
            </div>
            <div className="col-6">
              <div className="round-container" >
                <label htmlFor='humidity'>Humidity</label><br />
                <span id='humidity'>{humidity}%</span>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-12">
              <div className="round-container">
                <label htmlFor='feels-like'>Feels Like</label><br />
                <span id='feels-like'>{kelvinToCelcius(temperature?.feelsLike)}°C</span>
              </div>
            </div>
          </div>
        </div>}
    </>
  );
};

