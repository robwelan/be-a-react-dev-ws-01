import React from 'react';
//  chakra-ui
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ResponsiveValue,
} from '@chakra-ui/react';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
//  styles
import './index.css';

type PointerEvents =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'inherit'
  | 'initial'
  | 'unset';

type PropsInputFilter = {
  functions?: {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
  };
  iconLeft?: {
    color?: string;
    pointer?: ResponsiveValue<PointerEvents>;
  };
  iconRight?: {
    color?: string;
  };
  inputRef?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  value?: string;
};

const InputFilter: React.FC<PropsInputFilter> = ({
  functions: {
    onChange: doOnChange = () => {},
    onClear: doOnClear = () => {},
  } = {},
  iconLeft = {},
  iconRight = {},
  inputRef = null,
  placeholder = 'Search...',
  value = '',
}) => {
  const { color: colorIconLeft = '', pointer: pointerEventsLeft = 'auto' } =
    iconLeft;
  const { color: colorIconRight = '' } = iconRight;

  return (
    <InputGroup>
      <InputLeftElement pointerEvents={pointerEventsLeft}>
        <Search2Icon color={colorIconLeft} />
      </InputLeftElement>
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (doOnChange) {
            doOnChange(event);
          }
        }}
        placeholder={placeholder}
        ref={inputRef}
        value={value}
      />
      <InputRightElement>
        <CloseIcon
          className="button-filter-clear"
          color={colorIconRight}
          onClick={() => {
            doOnClear();
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default InputFilter;
