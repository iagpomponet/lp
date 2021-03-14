import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #03FFA5;
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.h3`
  display: flex;
  font-size: 64px;
  font-weight: 500;
  text-transform: uppercase;
  max-width: 540px;
  gap: 40px;
  color: #000000;

  &:before {
    content: "//";
    display: flex;
    color: white;
  }
`
export const Text = styled.p`
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  max-width: 330px;
  padding-left: 98px;

  margin-top: 1rem;
  margin-bottom: 2.75rem;
`

export const Button = styled.button`
  max-width: 196px;
  width: 100%;
  border: 1px solid #000000;
  border-radius: 6px;
  height: 48px;
  color: black;
  background-color: #03FFA5;
  cursor: pointer;
  transition: 0.4s;
  margin-left: 98px;

  &:hover {
    opacity: 0.8;
  }
`

export const Col = styled.div`
  display: flex;
  gap: 30px;
  position: relative;

  article:nth-child(2) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  article:last-child {
    align-self: flex-end;
  }

  article:first-child {
    align-self: center;
  }
`

export const LeftCol = styled(Col)`
  flex-direction: column;
`;
