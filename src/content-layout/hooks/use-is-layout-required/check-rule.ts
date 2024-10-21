//  local constants
import defaultState from './default-state';
//  security
import {
  PUBLIC_ROUTE_PAGE_FELONY_CHARGES_DJT,
  PUBLIC_ROUTE_PAGE_TIKTOKBIO,
} from '../../../security/constants/routes-public';
//  utilities
import replaceAll from '../../../utilities/strings/replace-all.js';

type Payload = {
  pathname: string;
};

const checkRule = (payload: Payload) => {
  const { pathname } = payload;

  const cleanPath = replaceAll({
    string: pathname,
    search: '/',
    replaceWith: '',
  });

  const cleanRouteFelonyChargesDJT = replaceAll({
    string: PUBLIC_ROUTE_PAGE_FELONY_CHARGES_DJT,
    search: '/',
    replaceWith: '',
  });

  const cleanRouteTikTokLinks = replaceAll({
    string: PUBLIC_ROUTE_PAGE_TIKTOKBIO,
    search: '/',
    replaceWith: '',
  });

  const isRouteFelonyChargesDJT = cleanPath === cleanRouteFelonyChargesDJT;
  const isRouteTikTokLinks = cleanPath === cleanRouteTikTokLinks;
  const result = !isRouteFelonyChargesDJT && !isRouteTikTokLinks;

  return result;
};

export default checkRule;
