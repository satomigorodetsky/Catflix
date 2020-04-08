import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render () {
      return (
          <div className="navbar-container">          
          <br/>
            <button className="navbar-logout" 
            onClick={() => this.props.logout()}>Log Out</button>
          </div>
      )
  }
};

export default NavBar;