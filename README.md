# README

<<<<<<< HEAD
# [Link to Catflix](https://catflix-app.herokuapp.com/#/)

## Basic Overview
Catflix is a clone of Netflix made specifically for cat lovers. Users of Catflix can create accounts, search and stream videos. Catflix was created with React, Redux, and Rails. 

## Features

* User authentication 
* Ability to watch videos from anywhere on the site. 
* Ability to watch previews of videos on index page. 
* Ability to search videos which searches the batabase based on title and/or genre matches.


## User login/signup 

![alt text](https://github.com/Sokada101/Catflix/blob/master/app/assets/images/readme_assets/user_auth.png)

* Used session tokens in the backend and bootstrapping + protected/auth routes in the frontend.
* Users will be notified with correct errors if they left field blank or invalid inputs.

```javascript  blurField(field) {
       let hoverValue = field === "password" ? "password_hover" : "email_hover";
       let blankValue = field === "password" ? "password_blank" : "email_blank";

       return (e) => {
           // email or password
           if (this.state.field === "") {
              return this.setState({
                   errors: {  
                   [hoverValue]: !(this.state.errors[hoverValue]),
                   [blankValue]: true 
                  }
                });
           } else if (field === "password" && this.state.password.length < 4 ) {
              return  this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: true 
                   }
               });        
           } 
           else if (field === "email" && this.state.email.length < 1 ){
              return this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: true 
                   }
               });
           } else {
               return this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: false
                   }
               });
           }
       }
   }
   
  ```
## Display Videos

* Users can hover over a video and see the preview of the video. 

![alt text](https://github.com/Sokada101/Catflix/blob/master/app/assets/images/readme_assets/preview.png)


## Search 

* Checked URL path ```/search``` so that users can do another search right after search. 

```javascript   handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search?keyword=${this.state.query}`);
    this.setState({query: ''})

    if (this.props.location.pathname === "/search" ) {
          e.preventDefault();
          this.props.searchVideos(this.state.query);
          this.setState({ query: '' })
    }
  };```
  
  
=======
## [Link to Catflix](https://catflix-app.herokuapp.com/#/)

Catflix is a clone of NetFlix for cat lovers. Users of Catflix are able to create accounts, search and stream videos. Catflix was created with React, Redux, and Rails.

## FEATURES

* Users are able to login/logout/signup 
* Ability to preview videos on index page and watch videos on show page. 
* Users are able to search videos by title and genre through the search bar.

## User Authentication 
User authentication is implemented on the backend and frontend, utilizing session tokens in the backend and bootstrapping user + auth/protected routes in the frontend. 

![Link to Catflix](https://github.com/Sokada101/Catflix/blob/master/app/assets/images/readme_assets/user_auth.png)

* Users will be notified with errors if they left input fields blank after hover over the input field. 

```javascript  blurField(field) {
       let hoverValue = field === "password" ? "password_hover" : "email_hover";
       let blankValue = field === "password" ? "password_blank" : "email_blank";

       return (e) => {
           if (this.state.field === "") {
              return this.setState({
                   errors: {  
                   [hoverValue]: !(this.state.errors[hoverValue]),
                   [blankValue]: true 
                  }
                });
           } else if (field === "password" && this.state.password.length < 4 ) {
              return  this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: true 
                   }
               });        
           } 
           else if (field === "email" && this.state.email.length < 1 ){
              return this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: true 
                   }
               });
           } else {
               return this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: false
                   }
               });
           }
       }
   }
  ```
 ## Play previews
 Users can play previews when they hover over videos on the index page. 
 
 ![Link to Catflix](https://github.com/Sokada101/Catflix/blob/master/app/assets/images/readme_assets/preview.png)
 

 ## Search 
 
 * Users are able to continue searching after they fetch search result once.
 
 ```javascript     componentDidMount() {
        let queryParams = new URLSearchParams(this.props.location.search)
        let keyword = queryParams.get("keyword")
        if (keyword) {

           return  this.props.searchVideos(keyword)
        } 
        this.props.clearVideos();

    };
```

>>>>>>> c19921d10cc883dfb70dfe6d3e366f76a4d9e058
