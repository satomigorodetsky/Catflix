import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './dropdown';
import { debounce } from 'lodash';



class NavBar extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       showDropdown: false,
       showSearchBar: false,
       query: '',
     }
    this.handleInput = this.handleInput.bind(this);
    this.debouncedMakeRequest = debounce(this.debouncedMakeRequest, 430);

  }

  componentDidMount() {
    if (this.props.location.pathname === "/search") {
      this.setState({ showSearchBar: true })
      let queryParams = new URLSearchParams(this.props.location.search)
      let query = queryParams.get("keyword")
      this.setState({
        query
      }); 
    }
  }

  handleInput(e) {
    debugger
    let query = e.currentTarget.value;
    this.setState({
      query
    }); 
    if (query === "") {
      this.setState({ query: "" });
      // this.props.history.push(`/search?keyword=${this.state.query}`)
    } else {
      this.debouncedMakeRequest(query);
    }
  }

  debouncedMakeRequest() {
    this.props.history.push(`/search?keyword=${this.state.query}`);
      if (this.props.location.pathname === "/search" ) {
        this.props.searchVideos(this.state.query);
      }
  }
  
  render () {
     const {showSearchBar} = this.state;
     
     let searchBarClass = showSearchBar ? "showing" : "not-showing";

     let searchBar =
      <>
         <i className="fas fa-search" id="search-icon"></i>
          <input
          type="text"
          className={`search-input ${searchBarClass}`}
          placeholder="Titles, genres"
          value={this.state.query}
          onChange={this.handleInput}
        />
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
          <div className="searchbar-container" onClick={() => this.setState({ showSearchBar: true })} 
            onFocus={() => this.setState({ showSearchBar: true })}
            onBlur={() => this.setState({ showSearchBar: false })}>
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
