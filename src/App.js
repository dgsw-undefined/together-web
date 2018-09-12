import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import stores from 'stores';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import {
  Header,
  TeamList,
  // Login,
  UserList,
  SideBar,
} from 'components';

library.add(faStroopwafel)
class App extends Component {
  render () {
    
    return (
      <Router>
        <Provider store={stores}>
          <div>
            <SideBar/>
            <Route exact path="/" component={TeamList}/>
            <Route path="/user" component={UserList}/>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
