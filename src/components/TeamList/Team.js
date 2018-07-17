import React, { Component } from 'react';
import styled from "styled-components";

import ViewDetail from './ViewDetail';

class Team extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showDetail: false
    };
  }
  
  showDetail = (show) => this.setState({showDetail: show});
  
  render () {
    let create_date = new Date(this.props.team.create_date);
    
    return (
      <Container>
        <Header>{this.props.team.name}</Header>
        <div>주제 : {this.props.team.subject}</div>
        <div>분야 : {this.props.team.area}</div>
        <div>팅원 : {this.props.team.member_count} 명</div>
        <div>시작 : {create_date.getFullYear()}년 {create_date.getMonth() + 1}월 {create_date.getDate()}일</div>
        <Button onClick={() => this.showDetail(true)}>상세보기</Button>
        {this.state.showDetail && <ViewDetail team={this.props.team} hideDetail={this.showDetail}/>}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 20rem;
  border-radius: 1rem;
  border: 1px solid gray;
  background-color: #000000aa;
  margin: .5rem;
  padding: .5rem;
  color: black;
  display: inline-block;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  
  @media (max-width: 600px) {
    width: calc(100% - 2rem);
  }
`;

const Header = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid gray;
`;

const Button = styled.button`
  background-color: #00000000;
  float: right;
  padding: .4rem;
  outline: none;
  border-radius: .5rem;

  &:active {
    outline: none;
  }
`;

export default Team;
