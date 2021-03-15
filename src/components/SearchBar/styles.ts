import styled from 'styled-components';


export const SearchContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Bar = styled.input`
  position: relative;
  max-width: 240px;
  width: 100%;
  display: flex;
  border: 1px solid ${props => props.theme.grey};
  border-radius: 24px;
  height: 40px;
  padding: 0 1rem;

  &::placeholder {
    color: #EE0E7D;
  }
`;
