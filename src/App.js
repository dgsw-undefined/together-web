import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styled, { injectGlobal } from 'styled-components';

import stores from 'stores';
import MainBackground from 'img/main_bg.png';

import {
  Header,
  TeamList,
} from 'components';

class App extends Component {
  render () {
    
    return (
      <Provider store={stores}>
        <AppContainer>
          <Header/>
          <TeamList/>
        </AppContainer>
      </Provider>
    );
  }
}

const AppContainer = styled.div`
  height: calc(100vh - 5rem);
`;

injectGlobal`
  * {
    color : white;
    text-shadow : 0 0 5px black;
  }
  
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12pt;
    background-image: url(${MainBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
  
  body {
    padding-top: 5rem;
  }
`;

export default App;
