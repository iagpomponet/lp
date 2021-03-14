import React from 'react';


import * as Styled from './styles'
import Logo from '../../icons/Logo/index'
import SearchBar from '../SearchBar/index';
import ShoppingCartIcon from '../../icons/ShoppingCart/index';

const Header: React.FC = () => {
  return (
    <Styled.Header>
          <Styled.LeftCol>
            <Logo />
            <Styled.Menu>
              <Styled.LinksList>
                <li>
                  <a>Nossas soluções</a>
                </li>
                <li>
                  <a>Conheça a Jüssi</a>
                </li>
              </Styled.LinksList>
            </Styled.Menu>
          </Styled.LeftCol>
      <SearchBar />
      <Styled.LoginLink>Login</Styled.LoginLink>
      <Styled.MinicartTrigger>
        <ShoppingCartIcon />
      </Styled.MinicartTrigger>
    </Styled.Header>
  );
}

export default Header;
