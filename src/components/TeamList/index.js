import React, { Component,Fragment } from 'react';
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
      <Fragment>
        {this.props.store.State.teamList && this.props.store.State.teamList.map(team => <Team key={team.id} team={team} />)}
        </Fragment>
    );
  }
}

export default TeamList;
