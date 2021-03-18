import React from 'react';

import * as Styled from './styles';

const Newsletter: React.FC = () => {
  return <Styled.Newsletter>
      <Styled.Title>
      receba novidades da nossa área de produtos digitais.
      </Styled.Title>

      <Styled.InputBox>
        <Styled.Input placeholder="Digite seu e-mail"/>
        <Styled.Button>
          CADASTRAR
        </Styled.Button>
      </Styled.InputBox>

  </Styled.Newsletter>;
}

export default Newsletter;
