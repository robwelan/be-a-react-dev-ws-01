import { State } from '../state/interfaces';
//  destination types and interfaces
import {
  Controls,
  DataTypesForHtml,
} from '../../../components/input-for-floating-form-control/define-types-and-interfaces';

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
      type: {
        control: Controls.Text,
        data: DataTypesForHtml.String,
      },
      value: company,
    },
    position: {
      contact: {
        key: 'position.contact',
        label: 'Main Contact:',
        placeholder: 'ENTER main contact’s name',
        type: {
          control: Controls.Text,
          data: DataTypesForHtml.String,
        },
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
        type: {
          control: Controls.Select,
          data: DataTypesForHtml.String,
        },
        value: position.status,
      },
      title: {
        key: 'position.title',
        label: 'Position Title:',
        placeholder: 'ENTER position title per the job ad',
        type: {
          control: Controls.Text,
          data: DataTypesForHtml.String,
        },
        value: position.title,
      },
      uri: {
        key: 'position.uri',
        label: 'Link to Job Advertisement',
        placeholder: 'ENTER link to job advertisement',
        type: {
          control: Controls.URL,
          data: DataTypesForHtml.String,
        },
        value: position.uri,
      },
    },
  };
};

export default getFieldsFromState;
