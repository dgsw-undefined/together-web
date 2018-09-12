import React, { Component,Fragment } from 'react';
import 'Assets/index.css';

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
      <Fragment>
        <div id="main">
          <div id="content">
            <div className="card">
              <div className="card-header">
                {this.props.user.name}
              </div>
              <div className="card-content">
                메일 : {this.props.user.email} <br/>
                개발 분야 : {this.props.user.field} <br/>
                개발 세부 분야 : {this.props.user.position} <br/>
                깃허브 : {this.props.user.github} <br/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
