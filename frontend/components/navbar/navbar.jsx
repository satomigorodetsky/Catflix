import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DropDown from './dropdown';
import { SearchIndexContainer } from '../search/search_index_container';


class NavBar extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       showDropdown: false,
       showSearchBar: false,
       query: ""
     }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInput(e) {
    e.preventDefault();

    let query = e.currentTarget.value;
    this.setState({
      query
    }); 
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search?keyword=${this.state.query}`);
    this.setState({query: ''})

    if (this.props.location.pathname === "/search" ) {
          e.preventDefault();
          this.props.searchVideos(this.state.query);
          this.setState({ query: '' })
    }
  };

  
  render () {
     const {showSearchBar} = this.state;
     let searchBarClass = showSearchBar ? "showing" : "not-showing";

     let searchBar =
      <>
         <i className="fas fa-search" id="search-icon"></i>
         <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          className={`search-input ${searchBarClass}`}
          placeholder="Titles, genres"
          value={this.state.query}
          onChange={this.handleInput}
        />
         </form>
      </>;
      return (
          <div className="navbar-container"> 
          <div className="catflix-logo" to="/">CATFLIX</div>  
            <div className="navbar-links">    
                <Link to="/browse">Home</Link>
                <Link to="/browse/tvshows">TV Shows</Link>
                <Link to="/browse/movies">Movies</Link>
                <Link to="/browse/mylist">My List</Link>
            </div>
          <div className="searchbar-container" onMouseOver={() => this.setState({ showSearchBar: true })} onMouseLeave={() => this.setState({ showSearchBar: false })}>
            {searchBar}
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
