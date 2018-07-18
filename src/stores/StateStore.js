import {observable, action} from 'mobx';
import request from 'superagent';

import { SERVER, LOG } from 'config';

class StateStore {
  @observable teamList = [{
      "team": {
        "id": 31,
        "name": "undefined",
        "subject": "프로젝트 팀 빌딩",
        "area": "development",
        "docs": "프로젝트를 함께 진행할 팀원들을 모집하는 어플리케이션입니다.",
        "leader_id": 6,
        "create_date": "2018-07-16T23:42:17.000Z",
        "member_limit": 4,
        "member_count": 1,
        "status": 1,
        "destroy_date": null
      },
      "team_member": [
        {
          "id": 5,
          "team_id": 31,
          "user_id": 6,
          "field": "front",
          "inviter_id": 6,
          "enroll_date": "2018-06-09T02:57:15.000Z",
          "kickout_date": null,
          "walkout_date": null,
          "is_leader": 1
        },
        {
          "id": 6,
          "team_id": 31,
          "user_id": 7,
          "field": "android",
          "inviter_id": 6,
          "enroll_date": "2018-07-14T08:48:44.000Z",
          "kickout_date": null,
          "walkout_date": null,
          "is_leader": 0
        }
      ]
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
  ];
  
  @action loadTeamList = async () => {
    try {
      const response = await request.get(SERVER+'/node/team/super_list/');
      LOG(response.body, 'GET TEAM LIST');
      this.teamList=response.body.Data;
    } catch(error) {
      LOG(JSON.stringify(error), 'ERROR WHEN GET TEAM LIST');
    }
  };

  @action loadUserList=async ()=>{
    try{
      const response = await request.get(SERVER+'/node/user/list/1');
      LOG(response.body, 'GET USER LIST');
      this.userList=response.body.Data;
    }catch(err){
      LOG(JSON.stringify(err),'ERROR WHEN GET USER LIST');
    }
  };
}

export default StateStore;
