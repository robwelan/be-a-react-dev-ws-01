import { DataTypesForHtml } from '../../../components/input-for-floating-form-control/define-types-and-interfaces';

type Payload = {
  value: string;
  type: string;
};

const getIsExpectedType = (payload: Payload) => {
  const { value, type } = payload;

  if (value === type) return true;

  return false;
};

export default getIsExpectedType;
