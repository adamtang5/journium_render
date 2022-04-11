<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/adamtang5/aa_mod4_meme_overflow_project"> -->
    <img src="frontend/public/images/icons/journium-logo-white-on-black.png" alt="Logo" width="80" height="80">
<!--   [Journium Logo] -->
  </a>

<h3 align="center">Journium</h3>

  <p align="center">
    A clone of Medium
    <br />
    <a href="https://aa-journium.herokuapp.com/"><strong>Live Link on Heroku »</strong></a>
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Journium is a clone of Medium, a website for budding developers in bootcamp and others who support them to write about their experience related to bootcamp, share their tips, comment on their stories, like their stories. Access the <a href="https://aa-journium.herokuapp.com/">Journium MVP</a>.

<!--  <img src="public/icons/mainpage-login-ss.png" width=auto height=auto> -->

## Index
|
[MVP Feature List](https://github.com/adamtang5/aa_mod5_w16_express_react_solo/wiki/MVP-Feature-List) |
[Database Schema](https://github.com/adamtang5/aa_mod5_w16_express_react_solo/wiki/Database-Schema) |


## Technologies Used
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>


## Getting started

1. Clone this repo.

    * ```git clone git@github.com:adamtang5/aa_mod5_w16_express_react_solo.git```

2. Install dependencies from the root directory.

    * ```npm install```

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.

    * ```CREATE USER <name> WITH CREATEDB PASSWORD <'password'>```

4. Create a .env file in the backend directory based on the .env.example found within the respective directory.

5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).

6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.

    * ```"proxy": "http://localhost:5000"```

7. Create Database, Migrate, and Seed models.

    * ```npx dotenv sequelize db:create```
    * ```npx dotenv sequelize db:migrate```
    * ```npx dotenv sequelize db:seed:all```

8. Start the services in the backend directory.

    * ```npm start```

9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http://localhost:3000.

    * ```npm start```

10. You can use the Demo user or create an account to begin using **Journium**.


**Key Features**
* Create new users and have user login with authorization
* Post, edit, and delete stories/comments owned by the current user
* User profile page with stories written by the current user
* Comments page with comments made by the current user
* Liked stories page with stories liked by the current user
* Categories that can be assigned to stories


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* Users can signup and login to use Journium, and can login as a demo user to experience the website quickly.

<!--  <img src="public/icons/login-page.png" width=auto height=auto> -->



* Once logged in, the user is directed to the main stories page, where logged-in users can view a list of stories based on time created. On the left nav bar, there are icons for home, read stories, likes, write a story, and the avatar for user preferences.

<!--  <img src="public/icons/mainpage-login-ss.png" width=auto height=auto> -->



* On the main stories page, a logged in user can like a story, or save a story to reading list.

<!--  <img src="public/icons/question-answer-comment-ss.png" width=auto height=auto> -->



* User can edit profile settings on settings page.

<!-- <img src="public/icons/profile-page.png" width=auto height=auto> -->



* Logged in users can search stories by one or multiple keywords based on story title and content.


<!-- <img src="public/icons/search-keyword.png" width=auto height=auto> -->



<p align="right">(<a href="#top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Adam Tang - [GitHub](https://github.com/adamtang5)

Project Repo Link: [https://github.com/adamtang5/aa_mod5_w16_express_react_solo](https://github.com/adamtang5/aa_mod5_w16_express_react_solo)

Project Link: [https://aa-meme-overflow.herokuapp.com/](https://aa-meme-overflow.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
