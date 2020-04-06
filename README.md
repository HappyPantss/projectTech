# projectTech: Amore Dating App - Login/ register feature

In this repo I'm building my feature for a dating app called 'Amore'. Its for my project I had in my second year of my study Communication and Multimedia Design at the Amsterdam University of Applied Sciences.

# Amore Dating App

![Home](https://i.imgur.com/F5jfwH7.png)
![Register](https://i.imgur.com/OPO9DHj.png)
![Forgot Password](https://i.imgur.com/lYIJA1s.png)

"With this app you can search for your new love! Register and login, and lets hope you will find your future partner"

With this app you can register an account, and login with it!

# Job story

"When I am using a dating app to look for a partner, I want to be able to register a profile and to login, so I always can come back and talk with my matches."

# Installation

1. Clone the repository:
```git $ git clone https://github.com/HappyPantss/projectTech ```

2. Install dependencies:
```git $ npm install ```

3. Add a .env file with:
```
DB_HOST=projectTech-xbcbo.mongodb.net/test?retryWrites=true&w=majority
DB_NAME=<yourCollection>
DB_PORT=27017
DB_USER=<yourUsername>
DB_PASSWORD=<youPassword>
````

4. Add a .gitignore file with:
```
/node_modules
.env
```

# Usage
1. Run Developer Mode
```git $ npm run dev ```

2. Go to `localhost:3000` in your browser and if everything has gone succesfull, you should see the app.

3. Open Inspect Element by pressing the F12 button. Change your screen to mobile just like the picture down below. The app currently only works on mobile.

![Inspect Element](https://i.imgur.com/Hia911b.png)

4. Logging in is not working! What you can do is:
- Go to the register page, and register a new profile
- See all the users that exist (you can check if your profile is added)

# Database Structure
![Database Structure](https://i.imgur.com/DMugLfN.png)
Collection: user
Database name: users

# License
[MIT license](https://github.com/HappyPantss/projectTech/blob/master/LICENSE)
