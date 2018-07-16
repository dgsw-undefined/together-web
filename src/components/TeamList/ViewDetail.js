import React from 'react';
import styled from "styled-components";

const ViewDetail = props => {
  
  let create_date = new Date(props.team.create_date);
  let destroy_date = new Date(props.team.destroy_date);
  
  return (
    <Container onClick={() => props.hideDetail(false)}>
      <div>{props.team.id}</div>
      <div>팀명 : {props.team.name}</div>
      <div>주제 : {props.team.subject}</div>
      <div>분야 : {props.team.area}</div>
      <div>{props.team.docs}</div>
      <div>{props.team.leader_id}</div>
      <div>{create_date.toDateString()}</div>
      <div>{props.team.member_limit}</div>
      <div>{props.team.member_count}</div>
      <div>{props.team.status}</div>
      <div>{destroy_date.toDateString()}</div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0; top: 0; right:0; bottom: 0;
  background-color: rgba(0,0,0,0.8);
  padding: 1rem;
  animation: fade-in .5s;
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
  }
`;

export default ViewDetail;
