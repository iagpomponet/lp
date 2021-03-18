import styled from 'styled-components';

export const Newsletter = styled.section`
  display: flex;
  flex-direction: column;
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

export const InputBox = styled.div`
  display: flex;
  max-width: 502px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  margin-top: 24px;
`;

export const Button = styled.button`
  color: ${props => props.theme.primaryColor};
  background-color: black;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  color: white;
  background-color: black;
  box-shadow: unset;
  border: 0;


  &::placeholder {
    color: white;
  }
`;
