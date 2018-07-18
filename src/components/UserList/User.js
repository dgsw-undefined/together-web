import React, { Component } from 'react';
import styled from "styled-components";

// import ViewDetail from './ViewDetail';

class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showDetail: false
    };
  }
  
  showDetail = (show) => this.setState({showDetail: show});
  
  render () {
    // let create_date = new Date(this.props.team.create_date);
    
    return (
      <Container>
        <Header>{this.props.user.name}</Header>
        <div>메일 : {this.props.user.email}</div>
        <div>개발 분야 : {this.props.user.field}</div>
        <div>개발 세부 분야 : {this.props.user.position}</div>
        <div>깃허브 : {this.props.user.github}</div>
        {/*<div>시작 : {create_date.getFullYear()}년 {create_date.getMonth() + 1}월 {create_date.getDate()}일</div>*/}
        {/*{this.state.showDetail && <ViewDetail team={this.props.team} hideDetail={this.showDetail}/>}*/}
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

  &:active {
    outline: none;
  }
`;

export default User;
