import React from 'react';

import * as Styled from './styles';
import SearchIcon from '../../icons/Search/index';

const SearchBar: React.FC = () => {
  return <Styled.SearchContainer>
    <Styled.Bar placeholder="Busca" />
    <SearchIcon />
  </Styled.SearchContainer>;
}

export default SearchBar;
