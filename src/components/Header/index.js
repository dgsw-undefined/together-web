import React from 'react';
import styled from 'styled-components';

import logo from 'img/undefined_logo.png';
const Header = () =>
<HeaderContainer>
  <Logo src={logo} />
  <Title>같이가치 for Admin</Title>
  {/*<Login>로그인</Login>*/}
  <Menu>
    <MenuLink href="/">팀 목록</MenuLink>
    <MenuLink href="/user">사용자 목록</MenuLink>
  </Menu>
</HeaderContainer>;

const Menu = styled.div`
  position: absolute;
  right: 1rem;
`;

const MenuLink = styled.a`
  text-decoration: none;
  margin: 0 1rem;
  transition: all .2s ease-in;
  
  &:hover {
    color: silver;
    text-decoration: underline;
    font-size: 1.1rem;
  }
`;

const HeaderContainer = styled.div`
  background-color: rgba(0,0,0,.5);
  position: fixed;
  left: 0; right: 0; top: 0;
  padding: 1rem;
  display: flex;
  justify-contents: center;
  align-items: center;
  z-index: 99999;
`;
const Login=styled.div`
  margin-left:93rem;
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  color: yellow;
  margin-right: 1rem;
`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
`;

export default Header;
