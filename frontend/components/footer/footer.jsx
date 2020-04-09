import React from 'react';

class Footer extends React.Component {
   render() {
       return (
     <footer id="footer">
               <div className="footer-container">
                   <h3 className="footer-question" >Questions? Contact me.</h3>
                   <div className="footer-links">
                       <a className="github-link" href="https://github.com/Sokada101">GitHub</a>
                       <a href="https://www.linkedin.com/in/satomiokada/">LinkedIn</a>
                       <a href="https://brooklynanimalaction.org/">SaveCats</a>
                   </div>
               </div>
    </footer>
       )}
};

export default Footer;