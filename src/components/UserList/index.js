import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import User from './User';

@inject('store')
@observer
class UserList extends Component {
  
  componentDidMount() {
    this.props.store.State.loadUserList();
  }
  
  render() {
    return (
      <UserListContainer>
        {console.log(this.props)}
        {this.props.store.State.userList && this.props.store.State.userList.map(user => <User key={user.idx} user={user} />)}
      </UserListContainer>
    );
  }
}

const UserListContainer = styled.div`
  padding: 1rem .5rem;
  position: absolute;
`;

export default UserList;
