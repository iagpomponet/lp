import styled from 'styled-components';

export const Bar = styled.div`
  background-color: ${props => props.theme.grey};
  height: 80px;

  display: flex;
  align-items: center;
`;


export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  font-weight: 500;
  color: black;

  max-width: 264px;
  width: 100%;
  font-size: 15px;

  &:after {
    display: flex;
    align-items: center;
    content: "→";
  }
`;

export const ClientList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ClientItem = styled.li`
  display: flex;
  align-items: center;
`

export const ClientImage = styled.img`
  width: 100%;
`;



