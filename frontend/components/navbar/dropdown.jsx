import React from 'react';

class DropDown extends React.Component {


    render () {
        const {hideDropdown, currentUser } = this.props;
        return (
            <ul className="dropdown-dances" 
            onMouseLeave={hideDropdown} >
                <li>Welcome, {currentUser.email}</li>
                <li onClick={() => this.props.logout()}>Sign out of Catflix</li>
            </ul>
            )
    }
}

export default DropDown;

