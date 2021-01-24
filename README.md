# README

# Catflix is currently under maintenance!
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

* Users can hover over a video and see the preview of the video, also they are able to click details and see the description of the video.

![alt text](https://github.com/Sokada101/Catflix/blob/master/app/assets/images/readme_assets/video_detail.png)

## Search 

* Utilized ```debounce``` from lodash. A request is fired off to the server once the user hasn't typed for 430ms, using a debounced function.

```javascript 
    this.debouncedMakeRequest = debounce(this.debouncedMakeRequest, 430);
```
```javascript
  handleInput(e) {
    
    let query = e.currentTarget.value;
    this.setState({
      query
    }); 
    if (query === "") {
      this.setState({ query: "" });
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
 ```
 
