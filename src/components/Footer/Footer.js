import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="cell:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:biz@albertnjubi.com">biz@albertnjubi.com</LinkItem>
        {/*<LinkItem href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">.</LinkItem> lol */}
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Making fun games and having fun while doing it!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Juubey">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/albert-njubi/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/NjonjoNjubi">
          <AiFillTwitterSquare size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>  
  );
};

export default Footer;
