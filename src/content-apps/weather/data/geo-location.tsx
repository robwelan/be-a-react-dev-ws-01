import React from 'react';
//  geolocated
import { useGeolocated } from 'react-geolocated';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import UtilizeCoordinatesForecast from './utilize-coordinates-forecast';
import UtilizeCoordinatesLocale from './utilize-coordinates-locale';
//  state
import { weatherLocationForecast, weatherLocationLocale } from '../state/atoms';
//  view
import WeatherByLocationCard from '../view/weather-by-location';

const GeoLocatedWeather = () => {
  const forecast = useRecoilValue(weatherLocationForecast);
  const locale = useRecoilValue(weatherLocationLocale);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });
  const latitude = coords?.latitude;
  const longitude = coords?.longitude;
  const { loaded: forecastLoaded } = forecast;
  const { loaded: localeLoaded } = locale;
  const checkLatLon = coords && latitude && longitude;
  const isNotForecastLoaded = checkLatLon && !forecastLoaded;
  const isNotLocaleLoaded = checkLatLon && !localeLoaded;

  if (!isGeolocationAvailable && !isGeolocationEnabled) {
    return <div>Getting the location data&hellip;</div>;
  }

  if (!isGeolocationAvailable) {
    return <div>Checking for Geolocation permissions.</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocation is not enabled.</div>;
  }

  if (!coords) {
    return <div>Waiting for coordinates...</div>;
  }

  return (
    <>
      {isNotForecastLoaded && (
        <UtilizeCoordinatesForecast
          latitude={coords.latitude}
          longitude={coords.longitude}
        />
      )}
      {isNotLocaleLoaded && (
        <UtilizeCoordinatesLocale
          latitude={coords.latitude}
          longitude={coords.longitude}
        />
      )}

      <WeatherByLocationCard />
    </>
  );
};

export default GeoLocatedWeather;
