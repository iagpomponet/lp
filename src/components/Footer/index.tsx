import React from 'react';

import * as Styled from './styles'

import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../../icons/Social'

import WppIcon from '../../icons/WppIcon'

const Footer: React.FC = () => {
  return <Styled.Footer>
    <Styled.FooterContainer>
        <WppIcon/>
        <Styled.FooterIcons>
          <Styled.Link>
            <FacebookIcon />
          </Styled.Link>
          <Styled.Link>
            <InstagramIcon />
          </Styled.Link>
          <Styled.Link>
            <LinkedinIcon />
          </Styled.Link>
        </Styled.FooterIcons>
    </Styled.FooterContainer>
  </Styled.Footer>;
}

export default Footer;
