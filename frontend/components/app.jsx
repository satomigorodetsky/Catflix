import React from 'react';
import WelcomePageContainer from './welcome_page/welcome_page_container';


// login form container
// signup form container has to be made 
// then added to paths 
// add welcomepage component for / 
const App = () => (
   <div>
     <header>
      <h1>CATFLIX</h1>
      <WelcomePageContainer />
     </header>
   </div>
);

export default App;