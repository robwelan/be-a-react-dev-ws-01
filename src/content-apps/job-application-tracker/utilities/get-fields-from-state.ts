import { State } from '../state/interfaces';

interface Payload {
  state: State;
}

const getFieldsFromState = (payload: Payload) => {
  const { state } = payload;
  const { company, position } = state;

  return {
    company: {
      key: 'company',
      label: 'Company Name:',
      placeholder: 'ENTER company name',
      type: 'string',
      value: company,
    },
    position: {
      contact: {
        key: 'position.contact',
        label: 'Main Contact:',
        placeholder: 'ENTER main contact’s name',
        type: 'string',
        value: position.contact,
      },
      title: {
        key: 'position.title',
        label: 'Position Title:',
        placeholder: 'ENTER position title per the job ad',
        type: 'string',
        value: position.title,
      },
    },
  };
};

export default getFieldsFromState;
