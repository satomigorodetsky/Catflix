import React from 'react';

class Footer extends React.Component {
   render() {
       return (
               <div className="footer-container">
               <h3 className="footer-question" >Questions? <a className="email" href="mailto:satomiokada100@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me.</a></h3>
                   <div className="footer-links">
                   <a className="github-link" href="https://sokada101.github.io/" target="_blank">Portfolio</a>
                   <a href="https://www.linkedin.com/in/satomiokada/" target="_blank">LinkedIn</a>
                   <a href="https://github.com/Sokada101" target="_blank">GitHub</a>
                   <a href="https://brooklynanimalaction.org/" target="_blank">SaveCats</a>
                   </div>
               </div>
       )}
};

export default Footer;