import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;

  padding: 0 24px;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin: 0 32px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-grow: 1;
`

export const LinksList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  gap: 32px;

  height: 40px;


  font-size: 16px;
  font-weight: 500;
`

export const LoginLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  margin: 0px 32px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const MinicartTrigger = styled.button`
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
