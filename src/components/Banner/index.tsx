import React from 'react';

import * as Styled from './styles';

import { Container } from '../Layout/index';

import ProductCard from '../ProductCard/index';



const Banner: React.FC = () => {
  return <Styled.Banner>
      <Container>
        <Styled.LeftCol>
          <Styled.Title>
            Criamos lojas que vendem mais
          </Styled.Title>
          <Styled.Text>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
          </Styled.Text>
          <Styled.Button>
            Veja nossas soluções
          </Styled.Button>
        </Styled.LeftCol>
        <Styled.Col>
          <ProductCard src="/fridge.png" btnText="Mais detalhes" />
          <ProductCard src="/fridge.png" btnText="Mais detalhes" />
          <ProductCard src="/fridge.png" btnText="Mais detalhes" />
        </Styled.Col>
      </Container>
    </Styled.Banner>;
}

export default Banner;
