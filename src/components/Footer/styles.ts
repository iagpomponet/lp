import styled from 'styled-components';
import { Container } from '../Layout/index'


export const Footer = styled.footer`
  background-color: black;
  height: 80px;
`

export const FooterContainer = styled(Container)`
  justify-content: space-between;
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Link = styled.a`
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    opacity: 0.8;
  }
`

