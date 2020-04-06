import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing imports
import { signup, login, logout } from './actions/session_actions';
// testing imports 

document.addEventListener("DOMContentLoaded",() => {
   const root = document.getElementById("root");
   const store = configureStore();
   ReactDOM.render(<Root store={store} />, root)
   // testing //
   window.dispatch = store.dispatch;
   window.getState = store.getState;
   window.signup = signup;
   window.login = login;
   window.logout = logout;
   // testing //
});