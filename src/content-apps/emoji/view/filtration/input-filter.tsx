import React from 'react';
//  recoil
import { useRecoilState } from 'recoil';
//  components
import InputFilterComponent from '../../../../components/input-filter';
//  local utilities
import clearFilterValue from './utilities/clear-filter-value';
import setFilterValue from './utilities/set-filter-value';
//  local state
import { emojiDictionaryFilter } from '../../state/atoms';

const InputFilter = () => {
  const [filter, setFilter] = useRecoilState(emojiDictionaryFilter);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const { value = '' } = event.target;

      setFilterValue({ value, setValue: setFilter });
    }
  };

  const handleClearFilter = () => {
    clearFilterValue({ setValue: setFilter });
  };

  return (
    <InputFilterComponent
      functions={{ onChange: handleInputChange, onClear: handleClearFilter }}
      iconLeft={{ color: 'gray.300', pointer: 'none' }}
      iconRight={{ color: 'gray.300' }}
      placeholder="filter..."
      value={filter.input}
    />
  );
};

export default InputFilter;
