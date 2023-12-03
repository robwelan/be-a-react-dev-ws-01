//  constants
import {
  UNITS_OF_MEASUREMENT_IMPERIAL,
  UNITS_OF_MEASUREMENT_METRIC,
} from '../../../../constants';

type PayloadUnits = {
  units: string;
};

type PayloadTooltip = {
  units: string;
  temperature: {
    max: number;
    min: number;
  };
};

const getUnits = (payload: PayloadUnits) => {
  const { units } = payload;
  const labelF = 'Fahrenheit';
  const labelC = 'Celsius';

  if (units === UNITS_OF_MEASUREMENT_IMPERIAL) {
    return labelF;
  }

  if (units === UNITS_OF_MEASUREMENT_METRIC) {
    return labelC;
  }

  return '';
};

const getTemperatureTooltip = (payload: PayloadTooltip) => {
  const { units, temperature } = payload;
  const labelUnits = getUnits({ units });
  const tipMain = `Min: ${temperature.min}° Max: ${temperature.max}°`;

  if (labelUnits === '') return tipMain;

  return `${tipMain} (${labelUnits})`;
};

export default getTemperatureTooltip;
