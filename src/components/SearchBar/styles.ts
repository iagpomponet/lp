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

export const SearchResults = styled.div`
    min-height: 300px;
    background-color: white;
    position: absolute;
    width: 150%;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
    }

    circle {
      stroke: ${props => props.theme.primaryColor}
    }
`;

export const ResultImage = styled.img`
  width: 80px;
  height: 80px;
`

export const ResultList = styled.ul`
    width: 100%;
    max-height: 600px;
    overflow: auto;
`

export const ResultItem = styled.li`
  border: 1px solid ${props => props.theme.grey};
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ResultName = styled.span`
  padding: 0 4px;
  font-size: 12px;
  color: black;
  font-weight: bold;

  display: flex;
  align-items: center;
`
