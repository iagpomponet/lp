import styled from 'styled-components';

export const ProductCard = styled.article`
  max-width: 210px;
  height: 270px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: white;
  padding: 12px;
`;

export const Image = styled.img`
  width: 100%;
  display: flex;
`

export const Button = styled.button`
  max-width: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EE0E7D;
  border: 1px solid #EE0E7D;
  height: 48px;
  border-radius: 30px;
`
