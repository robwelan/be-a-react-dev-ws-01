import styled from 'styled-components';

const StyledComponent = styled('div')<{
  fontSize: string;
  scale: string;
}>`
  font-size: ${(props) => props.fontSize};
  transition: scale(${(props) => props.scale});
  transition: 1s;
  transition-origin: 0 0;
  transition-property: font-size;
`;

export default StyledComponent;
