import React, { useRef } from 'react';
//  recoil
import { useRecoilState } from 'recoil';
//  components
import InputFilterComponent from '../../../../../components/input-filter';
//  local utilities
import clearFilterValue from './utilities/clear-filter-value';
import setFilterValue from './utilities/set-filter-value';
//  local state
import { htmlEntitiesFilterState } from '../../../state/atoms';

const InputFilter = () => {
  const [filter, setFilter] = useRecoilState(htmlEntitiesFilterState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const { value = '' } = event.target;

      setFilterValue({ value, setValue: setFilter });
    }
  };

  const handleClearFilter = () => {
    clearFilterValue({ setValue: setFilter });

    if (inputRef && inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  };

  return (
    <InputFilterComponent
      functions={{ onChange: handleInputChange, onClear: handleClearFilter }}
      iconLeft={{ color: 'gray.300', pointer: 'none' }}
      iconRight={{ color: 'gray.300' }}
      inputRef={inputRef}
      placeholder="filter..."
      value={filter}
    />
  );
};

export default InputFilter;
