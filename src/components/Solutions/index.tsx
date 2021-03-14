import React from 'react';

import * as Styled from './styles';

import SolutionCard from '../SolutionCard/index';

const Solutions: React.FC = () => {
  return <Styled.SolutionsSection>
    <Styled.SoluctionSectorContainer>
      <Styled.Title>
        Nossas soluções
      </Styled.Title>
      <Styled.SolutionList>
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
      </Styled.SolutionList>

    </Styled.SoluctionSectorContainer>
  </Styled.SolutionsSection>;
}

export default Solutions;
