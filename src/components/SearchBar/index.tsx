import React, { useState, useEffect } from 'react';

import * as Styled from './styles';
import SearchIcon from '../../icons/Search/index';
import LoadingIcon from '../../icons/LoadingIcon';

import { SearchCharacter } from '../../api/api';
import useDebounce from '../../hooks/useDebounce';
import { isElementOfType } from 'react-dom/test-utils';

interface CharData {
  image: string;
  name: string;
}

const SearchBar: React.FC = () => {
  const [searchData, setSearchData] = useState<[any]>([] as any);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [debouncedValue, value, setValue] = useDebounce("", 1000);

  const fetchDataHandler = async () => {
    setSearchOpen(true);
    setLoading(true);

    try{
      const response = await SearchCharacter(value);
      setSearchData(response?.results);
      setLoading(false);
    }
    catch(err){
      throw new Error(err);
    }
  }

  useEffect(() => {
    console.log('debouncedValue :>> ', debouncedValue);
    if(debouncedValue) fetchDataHandler();
  }, [debouncedValue]);


  useEffect(() => {
    const page = document.querySelector('body');
    page && page.addEventListener('click', (e) => {
      const element: any = e.target;

      if(!element) return;

      if(!element.matches('.js-bar') || !element.closest('.js-bar')){
        setSearchOpen(false)
      }
    })
  }, [searchOpen]);


  return <Styled.SearchContainer>
    <Styled.Bar onChange={(e) => setValue(e.target.value)} placeholder="Busca" />
    <SearchIcon />
    {
      searchOpen ?
      <Styled.SearchResults>
        {loading ? <LoadingIcon /> :
        <Styled.ResultList>
          {searchData && searchData.map(item => {
           return (
           <Styled.ResultItem>
              <Styled.ResultImage  src={item?.image}/>
              <Styled.ResultName>{item?.name}</Styled.ResultName>
            </Styled.ResultItem>)
          })}
        </Styled.ResultList>
        }
      </Styled.SearchResults>
      : <div></div>
    }

  </Styled.SearchContainer>;
}

export default SearchBar;
