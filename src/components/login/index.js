import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {SERVER} from 'config'

class Login extends React.Component{
  state={}
  constructor(){
    super()
    this.state={
      "id":"",
      "pw":"",
    }
    this.handleChange=this.handleChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }
  handleChange=(e)=>{
    console.log(e.target);
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit=()=>{
     let url=SERVER+'/go/user/signin';
        return axios.post(url,this.state)
        .then((res)=>{
          console.log(res)
        if(res.data.Code===100){
          alert('로그인 성공')
          localStorage.setItem("token",res.data.Token);
        }else{
          alert('실패다');
        }
        })
        .catch(err=>alert('실패다'));
  }
  render(){
    return(
      <Con>
        <input type="text" onChange={this.handleChange} value={this.state.id} name="id"/>
        <input type="password" onChange={this.handleChange} value={this.state.pw} name="pw"/>
        <button type="submit" onClick={this.onSubmit}>로그인</button>
      </Con>
    );
}
}
const Con=styled.div`
color:black;
z-index:999;
position:absolute;
input{
  color:black;
}
button{
  color:black;
}
`;
export default Login;
