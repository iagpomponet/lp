import React from 'react';

import * as Styled from './styles'
import { Container } from '../Layout/index';

const ClientsBar: React.FC = () => {
  return <Styled.Bar>
    <Container>
      <Styled.Title>
        Nossas principais lojas VTEX
      </Styled.Title>
      <Styled.ClientList>
        <Styled.ClientItem>
          <Styled.ClientImage src="/logo-brastemp.png"/>
        </Styled.ClientItem>
        <Styled.ClientItem>
          <Styled.ClientImage src="/logo-compra-certa.png"/>
        </Styled.ClientItem>
        <Styled.ClientItem>
          <Styled.ClientImage src="/logo-consul.png"/>
        </Styled.ClientItem>
        <Styled.ClientItem>
          <Styled.ClientImage src="/logo-thebar.png"/>
        </Styled.ClientItem>
      </Styled.ClientList>
    </Container>
  </Styled.Bar>;
}

export default ClientsBar;
