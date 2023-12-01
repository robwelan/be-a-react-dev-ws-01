/*
  https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&<params>
*/

import { OPENSTREETMAP_REVERSE_API_URI } from '../constants';
//  types
import { Coordinates } from '../types';

interface Payload extends Coordinates {}

const getLocationByCoordinatesUri = (payload: Payload) => {
  const { latitude, longitude } = payload;

  return `${OPENSTREETMAP_REVERSE_API_URI}?lat=${latitude}&lon=${longitude}&format=json&zoom=14`;
};

export default getLocationByCoordinatesUri;
