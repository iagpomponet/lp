import React from 'react';

import * as Styled from './styles';



const About: React.FC = () => {
  return <Styled.About>
        <Styled.AboutContainer>
          <Styled.Title>
            Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.
          </Styled.Title>
          <Styled.Small>
            Entre em contato
          </Styled.Small>
          <Styled.Email>
            comercial@jussi.com.br
          </Styled.Email>
        </Styled.AboutContainer>
  </Styled.About>
}

export default About;
