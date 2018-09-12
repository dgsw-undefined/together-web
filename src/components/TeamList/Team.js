import React, { Component,Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ViewDetail from './ViewDetail';
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

class Team extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showDetail: false
    };
  }
  
  showDetail = (show) => this.setState({showDetail: show});
  
  render () {
    let create_date = new Date(this.props.team.team.create_date);
    
    return (
      <div id="main_wapper">
        <div id="main">
          <div id="content">
            <div className="card">
              <div className="card-header">
                {this.props.team.team.name}
              </div>
              <div className="card-content">
                주제 : {this.props.team.team.subject} <br/>
                분야 : {this.props.team.team.area} <br/>
                팀원 : {this.props.team.team_member.length} 명
              </div>
              <div className="card-footer">
                <div className="button-fb" onClick={() => this.showDetail(true)}>
                <FontAwesomeIcon icon={faSearchPlus}/>&nbsp;&nbsp;자세히 보기
                </div>
                <div className="wapper">
                  시작 : {create_date.getFullYear()}년 {create_date.getMonth() + 1}월 {create_date.getDate()}일 <br/>
                  진행중
                </div>
              </div>
            </div>
            {this.state.showDetail && <ViewDetail team={this.props.team.team} team_member={this.props.team.team_member} hideDetail={this.showDetail}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
