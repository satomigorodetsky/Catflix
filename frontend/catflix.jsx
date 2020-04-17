import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing imports
import { fetchVideo } from './util/video_api_util';
// testing imports 

document.addEventListener("DOMContentLoaded",() => {
   let store;
   if (window.currentUser) {
     const preloadedState = {
        entities: {
           users: {[window.currentUser.id]: window.currentUser}
        },
        session: {currentUser: window.currentUser.id}
     };
     store = configureStore(preloadedState);
     delete window.currentUser;
   } else {
      store = configureStore();
   };

   const root = document.getElementById("root");
   ReactDOM.render(<Root store={store} />, root)

   // testing //
   window.fetchVideo = fetchVideo;
   window.dispatch = store.dispatch;
   window.getState = store.getState;
   // testing //
});