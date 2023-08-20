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
  const { company, dates, position } = state;

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
    dates: {
      applied: {
        key: 'dates.applied',
        label: 'Application Sent:',
        placeholder: 'ENTER the date you applied for this role',
        type: {
          control: Controls.Date,
          data: DataTypesForHtml.Date,
        },
        value: dates.applied,
      },
      deadline: {
        key: 'dates.deadline',
        label: 'Application Deadline:',
        placeholder: 'ENTER the deadline to apply for this role',
        type: {
          control: Controls.Date,
          data: DataTypesForHtml.Date,
        },
        value: dates.deadline,
      },
      followup: {
        key: 'dates.followup',
        label: 'Follow Up:',
        placeholder: 'ENTER the date to follow up your application’s progress',
        type: {
          control: Controls.Date,
          data: DataTypesForHtml.Date,
        },
        value: dates.followup,
      },
      found: {
        key: 'dates.found',
        label: 'Date Found:',
        placeholder: 'ENTER the date you found this job',
        type: {
          control: Controls.Date,
          data: DataTypesForHtml.Date,
        },
        value: dates.found,
      },
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
      description: {
        key: 'position.description',
        label: 'Position Description',
        placeholder:
          'ENTER the position description from the job advertisement',
        type: {
          control: Controls.Text,
          data: DataTypesForHtml.RichText,
        },
        value: position.description,
      },
      keywords: {
        key: 'position.keywords',
        label: 'Keywords in Job Description',
        placeholder: 'ENTER important keywords from Job Description',
        type: {
          control: Controls.TextArea,
          data: DataTypesForHtml.ListString,
        },
        value: position.keywords,
      },
      notes: {
        key: 'position.notes',
        label: 'My Notes',
        placeholder: 'ENTER any notes you may need to help you prepare',
        type: {
          control: Controls.Text,
          data: DataTypesForHtml.RichText,
        },
        value: position.notes,
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
