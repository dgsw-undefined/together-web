import React, { Component,Fragment } from 'react';
import 'Assets/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

class SideBar extends Component {

  render() {
    return (
    <Fragment>
        <div id="sidebar">
                <div id="logo">
                    <p>같이가치<br/>for Admin</p>
                </div>
            <ul>
                <a href="/"><li><FontAwesomeIcon icon={faUsers}/>&nbsp;팀</li></a>
                <a href="/user"><li><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;유저</li></a>
            </ul>
        </div>

        <div id="topbar">
            대소고 대나무숲
        </div>
    </Fragment>
    );
  }
}
export default SideBar;
