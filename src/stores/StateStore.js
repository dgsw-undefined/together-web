import {observable, action} from 'mobx';
import request from 'superagent';

import { SERVER, LOG } from 'config';

class StateStore {
  @observable teamList = [{
    "id": 31,
    "name": "undefiend",
    "subject": "팀 빌딩 어플리케이션",
    "area": "development",
    "docs": "기획자와 개발자를 연결해주는 팀 빌딩 어플리케이션을 기획하고 있습니다.",
    "leader_id": 6,
    "create_date": "2018-06-09T02:57:15.000Z",
    "member_limit": 4,
    "member_count": 1,
    "status": 1,
    "destroy_date": "0000-00-00 00:00:00"
  }];

  @observable userList=[
    {
      "idx": 1,
      "id": "wlsgur150",
      "name": "seoji22",
      "pw": "4a7505de5dce5acfa2dff1342c0903a5dd5a94d5c78419278199af2b5f85b5a4ab9f44fd140b4041ba01b6d1640c3b36d99263e519872bcd47a9699b49499fc4",
      "email": "asdasdasdasd",
      "status": 1,
      "interested": "asdasd",
      "github": "asdasda",
      "enroll_date": "2018-05-26T02:21:03.000Z",
      "field": "asdasdasd",
      "position": "asdasdadasd",
      "phone": "010-1010-0101",
      "profile": null
    },
  ]
  
  @action loadTeamList = async () => {
    try {
      const response = await request.get(SERVER + '/node/test/team_list');
      LOG(response.body, 'GET TEAM LIST');
      this.teamList = response.body.Data;
    } catch(error) {
      LOG(JSON.stringify(error), 'ERROR WHEN GET TEAM LIST');
    }
  };

  @action loadUserList=async (mode)=>{
    try{
      const response = await request.get(SERVER+'/node/user/list/'+mode);
      LOG(response.body, 'GET USER LIST');
      this.userList=response.body.Data;
    }catch(err){
      LOG(JSON.stringify(err),'ERROR WHEN GET USER LIST');
    }
  };
}

export default StateStore;
