# README

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

