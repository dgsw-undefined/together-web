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
  
  @action loadTeamList = async () => {
    try {
      const response = await request.get(SERVER + '/node/test/team_list');
      LOG(response.body, 'GET TEAM LIST');
      this.teamList = response.body.Data;
    } catch(error) {
      LOG(JSON.stringify(error), 'ERROR WHEN GET TEAM LIST');
    }
  };
}

export default StateStore;
