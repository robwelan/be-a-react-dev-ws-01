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
      type: 'text',
      value: company,
    },
    position: {
      contact: {
        key: 'position.contact',
        label: 'Main Contact:',
        placeholder: 'ENTER main contact’s name',
        type: 'text',
        value: position.contact,
      },
      status: {
        defaultValue: '',
        key: 'position.status',
        label: 'Status',
        options: [
          // { label: '--ENTER a Status--', value: '' },
          {
            label: 'New',
            value: 'new',
          },
          { label: 'Applied', value: 'applied' },
          { label: 'Lost', value: 'lost' },
          { label: 'Won', value: 'won' },
        ],
        placeholder: '--ENTER a Status--',
        type: 'select',
        value: position.status,
      },
      title: {
        key: 'position.title',
        label: 'Position Title:',
        placeholder: 'ENTER position title per the job ad',
        type: 'text',
        value: position.title,
      },
      uri: {
        key: 'position.uri',
        label: 'Link to Job Advertisement',
        placeholder: 'ENTER link to job advertisement',
        type: 'url',
        value: position.uri,
      },
    },
  };
};

export default getFieldsFromState;
