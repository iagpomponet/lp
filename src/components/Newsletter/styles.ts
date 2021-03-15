import styled from 'styled-components';

export const Newsletter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 436px;
  background-color: black;
`;

export const Title = styled.h5`
  color: white;
  font-size: 32px;
  text-transform: uppercase;

  max-width: 676px;
  width: 100%;

  display: flex;

  &:before{
    content: "//";
    color: ${props => props.theme.primaryColor};
  }
`;
