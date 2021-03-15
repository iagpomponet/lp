import styled from 'styled-components';

import { Container } from '../Layout'

export const About = styled.section`
  background-color: ${props => props.theme.secondaryColor};
  height: 480px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutContainer = styled(Container)`
  flex-direction: column;
  text-align: center;
`

export const Title = styled.h5`
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

export const Small = styled.small`
  color: white;
  font-size: 16px;
  margin: 2rem 0 1rem 0;
`;

export const Email = styled.span`
  color: white;
  font-size: 32px;
`;
