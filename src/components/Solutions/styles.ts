import styled from 'styled-components';
import { Container } from '../Layout/index';

export const SolutionsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 56px 0;
`

export const SoluctionSectorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 24px; 
`;

export const Title = styled.h5`
  font-size: 32px;
  font-weight: 700;
  color: black;
  text-transform: uppercase;

  display: flex;
  gap: 4px;

  &:before {
    content: "//";
    color: #03FFA5;
    font-size: 32px;
    font-weight: bold;
  }
`;



export const SolutionList = styled.div`
  display: flex;
  justify-content: space-between;
`
