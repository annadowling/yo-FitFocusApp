# Assignment 2 - MEAN Stack App using Yeoman package manager.

+ Name: Anna Dowling
+ Student Number: 08453713

###Overview.
This application is called Fit Focus. The concept of this application is to provide a facility for a user to find and/or rate fitness classes in their area,
in order to find a class which suits their needs.

The applications uses yeoman as its package manager which then integrates the use of mongo, express, angular-material and node.js as its core technologies.
The main aim of this application is to provide a way in which users can create a community for rating fitness classes. This is something which was inspired by
a lack of ratings on individual classes provided in my own area, which I was searching for online when trying to decide on classes to attend.
After attending classes which I did not enjoy and did not suit my needs, I thought that there may be a need for an application of this kind, to aid the decision making process for 
attending fitness classes. Health and fitness are quite popular topics in the media presently, with many gyms and personal trainers popping up which are mainly recommended based on word of mouth.
This application acts as a repository for fitness enthusiasts to make an informed decision on a class to attend.

This application makes use of the Angular Material design library to implement some of the core concepts of google app design and styling. Angular Material is the Angular implementation of 
Google's Material design standards and specification. These ui-components and directives give the application a clean and structured look and feel to the user.
The elements used would also be quite familiar to many users who have experience using any google applications or similar looking applications such as Facebook.
This provides a sense of familiarity to the user when navigating through the application. for the second the assignment the yeoman generator for angular-material was used to incorporate it into the application once again.
This is called generator-angular-material-fullstack.

Fit Focus provides a class ranking facility for adding posts and upvoting classes which the user wants to vote for.
This posts page can be viewed based on date added and also based on top rated classes. The user can click on the plus icon on the right hand side of the screen in order to add a class rating post
to the list. This then gets added to the list of posts when the user clicks post. If they wish to cancel adding their post, they can press the esc button on the keyboard, which will hide the dialog pop up.

This page also provides a link to a class booking facility, which allows the user to select a class time slot from the GUI interface. These time slots are currently hard-coded and are not stored,
with the intention of having these selections stored in the database for the second assignment. When the user clicks on a time slot the class the button then changes from green to red and displays
the text "Class full" to the user, in order to inform them that they have booked the class. This is the first stage of this functionality currently.

The application contains a forum, which stored messages posted using firebase. This acts as an area where users can submit questions which can then be answered by other users to gain further information.
These messages are saved to firebase and will all load regardless of who is logged in to the application. Users can also delete these posts.

The application contains a page for locating classes via google maps. This page requires the user to enter partial or full direction details.
This then returns location suggestions to the user which can be selected in the dropdown. 
Once a location is selected the map will fly to that address. The map can be viewed as satellite theme or terrain theme and includes markers and the drop in user for street view.
The map also has zoom functionality.

As of the second assignment the application now also contains an admin section for deleting users, which is tied to an admin account role. There is also a user settings page
in which the user can now update their account password.

### List of user features (excluding user registration and authentication)
 
 + Top Classes page with add post and rate post functionality. View by date or top rated classes.
 + Book a class page to select a class time slot to attend.
 + User forum for posting messages.
 + Google Maps location search for finding a class location upon input of directions or general location name.
 + Admin account settings facility for deleting users for admin roles.
 + User account settings page for editing user passwords.
 + Home navigation page to welcome user and provide access to all other application areas.
 + User Registration page
 + User Authentication page
 
### Installation requirements.
+ angular v1.5.2
+ angular-material v1.1.0
+ angular-material-css v1.0.6
+ angular-route v1.5.3
+ angular-animate v1.5.3
+ angular-aria v1.5.3
+ maps-api-v3
+ lodash v4.6.1
+ yeoman v1.7.0
+ generator-angular-material-fullstack
+ mongodb v3.2.4
+ node v4.2.4
+ npm v3.8.7
+ grunt-cli v1.2.0


### Set Up
+ git clone or download the zip of the application from this address: https://github.com/annadowling/yo-FitFocusApp.git
+ Install application locally using grunt as follows:
+ npm install –g yo grunt-cli bower
+ npm install -g generator-angular-material-fullstack
+ To run the application, navigate to the directory and run the command grunt serve.
+ If you wish to stop the server press ctrl + c


###Data Model Design.

![][image1]

###App Design.

A simple diagram showing the app's component design, in particular controllers and services (see example below).

![][image2]

### UI Design.

<b>Dashboard Greeting Page</b>
![][image3]
<br>
<br>
<b>Top Classes Page</b>
![][image4]
<br>
<br>
<b>Forum Page</b>
![][image5]
<br>
<br>
<b>Class Location Page</b>
![][image6]
<br>
<br>
<b>Book Class Page</b>
![][image7]
<br>
<br>
<b>Access User and Admin Settings Pages</b>
![][image9]
<br>
<br>
<b>User Settings Page</b>
![][image10]
<br>
<br>
<b>Admin Settings Page</b>
![][image8]
<br>
<br>
<b>Login Page</b>
![][image11]
<br>
<br>
    

### Routing

+ /login - client/app/account/login.html
+ /signup - client/app/account/signup.html
+ /main - client/app/main.html
+ /posts - client/app/post.html
+ /map - views/map.html
+ /forum - client/app/forum.html
+ /bookclass - client/app/bookClass.html
+ /admin - client/app/admin/admin.html
+ /settings - client/app/account/settings/settings.html
+ redirectTo - /login - client/app/account/login/login.html

### Web API endpoint reference:
### bookClass:
+ GET /api/bookClass return a list of classes
+ POST /api/bookClass', bookClass_id - update a class
+ POST /api/bookClass/' + bookClass_id + '/booked' - update the boolean booked for a class
+ GET /api/bookClass/' + bookClass_id - get a specific class
   
### forum:
+ GET /api/forums - get a list of forums
+ POST /api/forums', forum - update a forum
+ GET '/api/forums/' + forum_id - get a specific forum
   
### post:
+ GET '/api/posts' - get a list of posts
+ POST '/api/posts',post - add a post
+ POST '/api/posts/' + post_id + '/upvotes',{upvotes: new_upvote_count } - update the upvote count of a post
+ GET - '/api/posts/' + post_id - get a specific post
   
   
### user:
+ GET ('/', auth.hasRole('admin'), controller.index); - get all regsitered users if the user logged in is an admin user
+ DELETE ('/:id', auth.hasRole('admin'), controller.destroy); - delete user if the person deleting the user has the admin role
+ GET ('/me', auth.isAuthenticated(), controller.me); - get the authenticated user
+ PUT ('/:id/password', auth.isAuthenticated(), controller.changePassword); - get the authenticated users password
+ GET ('/:id', auth.isAuthenticated(), controller.show); display the authenticated user
+ POST ('/', controller.create); - create a new user
   
### map:
+ GET ('/', controller.index); - get the map
+ GET ('/:id', controller.show); - get a particular map id
+ POST ('/', controller.create); - create a map
+ PUT ('/:id', controller.update); - update the map
+ PATCH ('/:id', controller.update); - update the map
+ DELETE ('/:id', controller.destroy); - delete the map


###Extra features
The application contains functionality to register and authenticate a user.
It also contains facilities whereby a user can change their password. If a user has the administrative role then they can delete users from the admin page, as demonstrated in the above screenshot
for the Admin Settings Page.

This information is stored using mongodb as of the second assignment. This stores the users name, email and password upon registration to the application via the registration view.
Once the user has registered they can then login via the login view. The application cannot be accessed without user registration and login. If a user tries to access internal pages without logging in
they will be redirected to the login view. Logout functionality is also in place on each page. Once the user clicks the logout button they are re-directed to the user login view.
If the user then tries to access an internal login page after logging out, they will be denied access and redirected to the login view to prompt them to log in.


### Independent learning

+ Angular Material Design: https://material.angularjs.org
+ Google Maps api v3 https://developers.google.com/maps/documentation/javascript/tutorial
+ lodash https://lodash.com/
+ Assignment 2: yeoman http://yeoman.io/
+ Assignment 2: generator-angular-material-fullstack https://www.npmjs.com/package/generator-angular-material-fullstack

[image1]: ./datamodel.png
[image2]: ./appdesign.png
[image3]: ./dashboardview.png
[image4]: ./postsview.png
[image5]: ./forumview.png
[image6]: ./mapview.png
[image7]: ./bookclassview.png
[image8]: ./adminsettingsview.png
[image9]: ./accessAccountSettingsviews.png
[image10]: ./usersettingsview.png
[image11]: ./login.png


