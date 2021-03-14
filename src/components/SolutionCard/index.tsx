import React from 'react';

import * as Styled from './styles';

const SolutionCard: React.FC = () => {
  return <Styled.SolutionCard>
    <Styled.Thumb></Styled.Thumb>
    <Styled.Title>
      Nome do Produto #1
    </Styled.Title>
    <Styled.Description>
      Descrição do Produto #1
    </Styled.Description>
    <Styled.FeatureList>
        <Styled.FeatureListItem>
          Feature 1
        </Styled.FeatureListItem>
        <Styled.FeatureListItem>
          Feature 2
        </Styled.FeatureListItem>
        <Styled.FeatureListItem>
          Feature 3
        </Styled.FeatureListItem>
      </Styled.FeatureList>
    <Styled.Link>
      Ver solução
    </Styled.Link>
  </Styled.SolutionCard>;
}

export default SolutionCard;
