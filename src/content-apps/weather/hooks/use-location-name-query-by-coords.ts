import { useEffect } from 'react';
//  react-query
import { useQuery } from '@tanstack/react-query';
//  recoil
import { useSetRecoilState } from 'recoil';
//  helpers
import getLocationByCoordinatesUri from '../helpers/get-location-by-coordinates-uri';
//  recoil
import { weatherLocationLocale } from '../state/atoms';
//  types
import { Coordinates } from '../types';

interface Payload extends Coordinates {
  dev?: boolean;
}

const useLocationNameQuery = (payload: Payload) => {
  const { latitude, longitude } = payload;
  const { data, error, isPending } = useQuery({
    queryKey: ['weather-location-name'],
    queryFn: () =>
      fetch(
        getLocationByCoordinatesUri({
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
  const setLocale = useSetRecoilState(weatherLocationLocale);

  //  error effect
  useEffect(() => {
    if (error) {
      const errorData = {
        error: true,
        message: `An error has occurred: ${error.message}`,
      };
      
      setLocale({ data: errorData, loaded: true, loading: false });
    }
  }, [error]);

  //  data effect
  useEffect(() => {
    if (!error && !isPending && data) {
      setLocale({
        data: { ...data, error: false },
        loaded: true,
        loading: false,
      });
    }
  }, [error, isPending, data]);

  //  isPending effect
  useEffect(() => {
    if (isPending) {
      setLocale({ data: { error: false }, loaded: false, loading: true });
    }
  }, [isPending]);

  return null;
};

export default useLocationNameQuery;
