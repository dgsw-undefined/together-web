import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import Team from './Team';

@inject('store')
@observer
class TeamList extends Component {
  
  componentDidMount() {
    this.props.store.State.loadTeamList();
  }
  
  render() {
    return (
      <TeamListContainer>
        {this.props.store.State.teamList && this.props.store.State.teamList.map(team => <Team key={team.id} team={team} />)}
      </TeamListContainer>
    );
  }
}

const TeamListContainer = styled.div`
  padding: 1rem .5rem;
`;

export default TeamList;
