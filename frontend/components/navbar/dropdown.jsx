import React from 'react';

class DropDown extends React.Component {


    render () {
        const {hideDropdown, currentUser } = this.props;
        return (
            <ul className="dropdown-dances" 
            onMouseLeave={hideDropdown} >
                <li>Welcome, {currentUser.email}</li>
                <li ><a className="nav-link" href="https://sokada101.github.io/" target="_blank">Portfolio</a></li>
                <li ><a className="nav-link" href="https://www.linkedin.com/in/satomiokada/" target="_blank">LinkedIn</a></li>
                <li ><a className="nav-link" href="https://github.com/Sokada101" target="_blank">GitHub</a></li>
                <li onClick={() => this.props.logout()}>Sign out of Catflix</li>
            </ul>
            )
    }
}

export default DropDown;

