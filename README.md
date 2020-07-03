\*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

\*Front-end built with React, HTML, CSS, and Chart.js

\*Front-end of cookie survey app with backend server hosted on Heroku.

\*Link to Cookie Survey App on Heroku [Cookie Survey App on Heroku](https://cookiesurveyapp.herokuapp.com/)

\*Link to Cookie Survey App demo video on youtube [demo video](https://youtu.be/xOLTZ-pW3Qo)

<h1 align="center">Cookie Survey App🥛🍪 </h1>

<div align="center">
  A <code>React</code> web app where cookies lovers everywhere can rate their favorites cookies 
</div>

<div align="center">
  <p> 🧭Explore:
    <a href="https://youtu.be/xOLTZ-pW3Qo">Demo</a> || 
    <a href="https://github.com/ajshemi/iSurveyApp_backend">Backend</a>
  </p>
</div>

<br />

## Tech Stack

This web app makes use of the following:

[**Backend**](https://github.com/ajshemi/iSurveyApp_backend)

- Ruby [2.6.1]
- Rails [~> 5.2.3] - MVC web framework used as an API
- Bcrypt [~> 3.1.7] - Gem for encryption and securing user passwords
- Dotenv - Rails gem for securing API Keys
- Faker - Rails gem used to easily generate fake data: menu items
- IBM Watson SDK - IBM Watson Natural Language Understanding (NLU).
- Active Model Serializers - Serializing API routes to JSON
- JWT - securing tokens
- PostgreSQL [>= 0.18, < 2.0] - Database

**Front End**

- React.js
- React Router - Declarative Routing
- Semantic UI React
<!-- - Custom CSS3 styling -->

## Installing

<!-- _Note: Without Stripe API key, Google Maps API key and Yelp API key, the project will not function to it's fullest potential_<br /> -->

**Backend Installation:**

- Clone [backend repo](https://github.com/ajshemi/iSurveyApp_backend) to your local machine `git clone <backend-repo-url>`
- run `bundle install` to install required dependencies
- Ensure you have PostgreSQL running
- run `rails db:create` to create a database locally.
- run `rails db:migrate` to create tables into the database.
- run `rails db:seed` to create seed data.
- run `rails s` to run the server.

**Frontend Installation:**

- Clone this repo to your local machine `git clone <this-repo-url>`
- Ensure your Backend API is running at `http://localhost:3000/`
- run `npm install` to install all dependencies
- run `npm start` to start server
- When prompted, ensure Frontend is running at `http://localhost:3001`

## Features
