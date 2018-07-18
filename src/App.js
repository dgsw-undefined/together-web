import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import stores from 'stores';
import MainBackground from 'img/main_bg.png';

import {
  Header,
  TeamList,
  // Login,
  UserList,
} from 'components';

class App extends Component {
  render () {
    
    return (
      <Router>
        <Provider store={stores}>
          <AppContainer>
            <BlurBG/>
            <Header/>
            {/*<Login/>*/}
            <Route exact path="/" component={TeamList}/>
            <Route path="/user" component={UserList}/>
          </AppContainer>
        </Provider>
      </Router>
    );
  }
}

const AppContainer = styled.div`
  height: calc(100vh - 5rem);
`;

const BlurBG = styled.div`
  position: fixed;
  left: 0; right: 0; top: 0; bottom: 0;
  filter: blur(10px);
  background-image: url(${MainBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

injectGlobal`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  @import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);

  * {
    color : white;
  }
  
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12pt;
    background-color: #000000;
  }
  
  body {
    padding-top: 5rem;
  }
`;

export default App;
