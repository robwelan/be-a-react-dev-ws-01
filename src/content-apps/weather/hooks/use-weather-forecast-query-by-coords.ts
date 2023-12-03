import { useEffect } from 'react';
//  react-query
import { useQuery } from '@tanstack/react-query';
//  recoil
import { useSetRecoilState } from 'recoil';
//  helpers
import getWeatherDataUri from '../helpers/get-weather-data-uri';
import setTopCardWeather from '../helpers/set-recoil-state-top-card-weather';
//  recoil
import {
  weatherLocationForecast,
  weatherLocationTopCard,
} from '../state/atoms';
//  types
import { Coordinates } from '../types';

interface Payload extends Coordinates {
  dev?: boolean;
}

const useWeatherForecastQuery = (payload: Payload) => {
  const { latitude, longitude } = payload;
  const { data, error, isPending } = useQuery({
    queryKey: ['weather-forecast'],
    queryFn: () =>
      fetch(
        getWeatherDataUri({
          latitude,
          longitude,
        }),
      )
        .then((res) => {
          if (res) {
            if (res.status !== 200) {
              throw new Error(JSON.stringify(res.statusText));
            }
          }

          return res;
        })
        .then(async (res) => {
          const result = await res.json();

          return result;
        }),
  });
  const setForecast = useSetRecoilState(weatherLocationForecast);
  const setTopCardWeatherRecoil = useSetRecoilState(weatherLocationTopCard);

  //  error effect
  useEffect(() => {
    if (error) {
      const errorData = {
        error: true,
        message: `An error has occurred: ${error.message}`,
      };

      setForecast({ data: errorData, loaded: true, loading: false });
    }
  }, [error]);

  //  data effect
  useEffect(() => {
    if (!error && !isPending && data) {
      setForecast({
        data: { ...data, error: false },
        loaded: true,
        loading: false,
      });
      setTopCardWeather({ data, setState: setTopCardWeatherRecoil });
    }
  }, [error, isPending, data]);

  //  isPending effect
  useEffect(() => {
    if (isPending) {
      setForecast({ data: { error: false }, loaded: false, loading: true });
    }
  }, [isPending]);

  return null;
};

export default useWeatherForecastQuery;
