import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './dropdown';

class NavBar extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       showDropdown: false
     }
  }

  
  render () {
    // let dropdown = this.state.showDropdown ? <DropDown currentUser={this.props.currentUser} 
    // hideDropdown={() => this.setState({showDropdown: false})} 
    // logout={this.props.logout} /> : ""

      return (
          <div className="navbar-container"> 
          <div className="catflix-logo" to="/">CATFLIX</div>  
            <div className="navbar-links">    
                <Link to="/browse">Home</Link>
                <Link to="/browse/genre/tvshows">TV Shows</Link>
                <Link to="/browse/genre/movies">Movies</Link>
                <Link to="/browse/myList">My List</Link>
            </div>
            <div className="dropdown-trigger">
            <img className="garfield-logo"
              src={window.garfieldURL} onMouseEnter={() => this.setState({ showDropdown: true })}>
            </img>
            <DropDown currentUser={this.props.currentUser}
              hideDropdown={() => this.setState({ showDropdown: false })}
              logout={this.props.logout} />
            </div>
        </div >
     )
  }
};

export default NavBar;

          {/* <img className="dropdown-img"
            src={window.garfieldURL}
            onMouseEnter={() => this.setState({ showDropdown: true })}>
          </img>
          <ul className="dropdown-lists">
            <button onClick={() => this.props.logout()}>Sign out of Catflix</button>
          </ul>
        </div> */}