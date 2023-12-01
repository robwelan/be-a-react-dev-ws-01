import React from 'react';
//  hooks
import useLocationNameQuery from '../hooks/use-location-name-query-by-coords';
//  types
import { Coordinates } from '../types';

interface Props extends Coordinates {
  dev?: boolean;
}

const UtilizeCoordinatesLocale = (props: Props) => {
  const { latitude, longitude } = props;

  useLocationNameQuery({ latitude, longitude });

  return <></>;
};

export default UtilizeCoordinatesLocale;
