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

  if (!isGeolocationAvailable && !isGeolocationEnabled && !coords) {
    return <div>Getting the location data&hellip;</div>;
  }

  if (!isGeolocationAvailable) {
    return <div>Checking for Geolocation permissions.</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocation is not enabled.</div>;
  }

  return (
    <>
      {coords && coords.latitude && coords.longitude && !forecast.loaded && (
        <UtilizeCoordinatesForecast
          latitude={coords.latitude}
          longitude={coords.longitude}
        />
      )}
      {coords && coords.latitude && coords.longitude && !locale.loaded && (
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
