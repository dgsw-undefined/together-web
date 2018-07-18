import React from 'react';
import styled from 'styled-components';

import logo from 'img/undefined_logo.png';

const Header = () =>
<HeaderContainer>
  <Logo src={logo} />
  <Title>같이가치 for Admin</Title>
  {/*<Login>로그인</Login>*/}
</HeaderContainer>;

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
