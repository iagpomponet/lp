import React from 'react';

import * as Styled from './styles'

interface ProductCardProps {
  src: string;
  btnText: string;
}

const ProductCard : React.FC<ProductCardProps> = ({ src , btnText }) => {
  return (
    <Styled.ProductCard>
      <Styled.Image src={src} />
      <Styled.Button>
        {btnText}
      </Styled.Button>
    </Styled.ProductCard>
  );
}

export default ProductCard;
