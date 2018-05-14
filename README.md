# React Dashboard

By [Quentin Brogly](mailto:qbrogly@gmail.com)


## Instructions

1. Navigate to [repo](https://github.com/Bearsintours/react-dashboard)
2. Clone locally using
   `git clone git@github.com:Bearsintours/react-dashboard.git`
3. Install dependencies using `npm install` or `yarn install`
4. Run tests using `npm test` or `yarn test`
5. Start your server using `npm start` or `yarn start`
6. Navigate to app in [browser](http://localhost:3000)


## Discussion

I used the following technologies: HTML, SCSS, React, Redux, React-router and Mocha.
The charts were created using [Recharts](http://recharts.org/en-US/).
The app uses Webpack as modules bundler.

## Requirements

#### Create a mobile responsive page based on design provided. 
#### Please use React and Redux

The dashboard page is built with React and fully responsive.
I used React-router to set the routes to the daily, weekly or monthly dashboard page.
Each page is connected to the Redux store and the reducer specifies what data to consume depending on the route.


#### Write a simple unit test using Mocha

I wrote a simple unit test using Mocha that runs test for each action type and make sure the initial state display weekly data.


#### Make your code available on Github or Bitbucket

Source code available on Github


#### Deploy your project to a server, S3 or Heroku

I used Express for the production web server.
The project is deployed on Heroku [HERE](https://bearsintours-react-dashboard.herokuapp.com)
