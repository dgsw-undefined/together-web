import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { SERVER } from 'config';

//2018 7 15 이 코드는 신과 나만 이해 할 수 있는 코드다
//2018 7 17 이젠 신만 이해할 수 있다

class ViewDetail extends React.Component {
  state = {}
  memberList = () => {
    console.log('aaa')
    let url = SERVER + '/node/team/member' + this.props.id;
    axios.get(url)
         .then((res) => {
           console.log(res)
           if (res.data.Code === 201) {
             console.log('성공')
             this.setState({
                             member : res.data.Data
                           });
             const member = this.state.member.map((e) => <Member key={e.id}>{e.name}</Member>)
             return member;
           } else {
             alert('실패다');
           }
         })
         .catch(err => alert('실패다'));
  }
  
  constructor (props) {
    super(props)
    console.log(props)
    this.memberList = this.memberList.bind(this)
  }
  
  ComponentDidMount () {
    this.memberList();
  }
  
  render () {
    let create_date = new Date(this.props.team.create_date);
    let destroy_date = new Date(this.props.team.destroy_date);
    const { member } = this.state;
    return (
      <Container onClick={() => this.props.hideDetail(false)}>
        <Wapper>
          <Teamname>{this.props.team.name}</Teamname>
          <div>주제 : {this.props.team.subject}</div>
          <div>분야 : {this.props.team.area}</div>
          <div>{this.props.team.docs}</div>
          <div>시작 일자 : {create_date.toLocaleString()}</div>
          <TeamMemberTitle>팀 멤버 목록</TeamMemberTitle>
          {
            this.props.team_member.map((e) =>
                                         <MemberList key={e.id}>
                                           이름 : {e.name} <br/>
                                           맡은 분야 : {e.field} <br/>
                                           팀 가입 날짜
                                           : {create_date.getFullYear() + "년 " + create_date.getMonth() + "월 " + create_date.getDay() + "일"}
                                           <br/>
                                           {e.is_leader ? "팀 리더" : ""}
                                           <br/>
                                           <br/>
                                         </MemberList>
            )
          }
        </Wapper>
      </Container>
    );
  }
};

const Container = styled.div`
  z-index:150;
  position: fixed;
  overflow-y:scroll;
  left: 0; top: 0; right:0; bottom: 0;
  background-color: rgba(0,0,0,0.3);
  padding: 1rem;
  animation: fade-in .5s;
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
  }
`;
const Member = styled.div`
font-size:1rem;
color:red;
`
const Wapper = styled.div`
  display:table-shell;
  margin-left:auto;
  margin-right:auto;
  background-color:#ffffff;
  width:50rem;
  bottom:0;
  top:0;
  height:auto;
  div{
    text-align:center;
    color:black;
  }
`
const Teamname = styled.h1`
  margin-top:100px;
  text-align:center;
  color:black;
  font-size:3rem;
`

const TeamMemberTitle = styled.h1`
  font.size:2rem;
`
const MemberList = styled.div`
  text-align:left;
  font-weight:bold;
`

export default ViewDetail;
