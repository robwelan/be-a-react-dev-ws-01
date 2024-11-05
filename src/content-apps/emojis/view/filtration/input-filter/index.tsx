import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import InputFilterComponent from '../../../../../components/input-filter';
import clearFilterValue from '../utilities/clear-filter-value';
import setFilterValue from '../utilities/set-filter-value';
import { filteredEmojis } from '../../../state/atoms';

const InputFilter = () => {
  const MILLISECONDS = 300;
  const [filter, setFilter] = useRecoilState(filteredEmojis);
  const [inputValue, setInputValue] = useState<string>(filter.input || ''); // Local input state for immediate feedback
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timeout ID
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value || '';
    setInputValue(value); // Update input state immediately

    // Clear any existing timeout to reset the delay
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set a new timeout to trigger the filter only after typing stops
    typingTimeoutRef.current = setTimeout(() => {
      setFilterValue({ value, setValue: setFilter });
    }, MILLISECONDS);
  };

  const handleClearFilter = () => {
    setInputValue(''); // Clear the input display immediately
    clearFilterValue({ setValue: setFilter });

    if (inputRef && inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current); // Clear timeout if input is cleared
    }
  };

  // Clean up timeout on component unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <InputFilterComponent
      functions={{ onChange: handleInputChange, onClear: handleClearFilter }}
      iconLeft={{ color: 'gray.300', pointer: 'none' }}
      iconRight={{ color: 'gray.300' }}
      inputRef={inputRef}
      placeholder="filter..."
      value={inputValue}
    />
  );
};

export default InputFilter;
