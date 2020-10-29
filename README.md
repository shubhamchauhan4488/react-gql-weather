
How to run the APPS on local :

### `react-gql-weather`
 ### `git clone`
 - cd into your desired dir folder 
 - git clone https://github.com/shubhamchauhan4488/react-gql-weather.git
 
 ### `yarn`
  - In terminal, cd into react-web-client
  - Run `yarn` to install the packages
 
 ### `yarn start`
  - In terminal, run `yarn start`
  - Runs the app in the development mode.<br />
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
### `graphql-weather-api`
 ### `git clone`
 - cd into the same dir folder created in step one i.e 'react-gql-weather' 
 - git clone https://github.com/konstantinmuenster/graphql-weather-api.git
 
 ### `API key`
 This app needs API key to be put in .env file.
 - Go to https://openweathermap.org/api, suscribe for CurrentWwatherData Api and click get API key.
 - Create an account with openWeatherMap at https://home.openweathermap.org/users/sign_up 
 - Once an account is created, you will receive an API-key in the mail provided.
 - In terminal, cd into graphql-weather-api and open it in an editor.
 - Create .env file in the root directory of graphql-weather-api, and write : `KEY=YOUR_KEY_RECEIVED_IN_MAIL`. Save.
 
 ### `npm`
 This app uses npm package manager. In terminal, under same project i.e graphql-weather-api, run `npm i` to install the packages
 
 ### `npm start`
 In terminal, run `npm start`
 Runs the app in the development mode.<br />
 Open [http://localhost:4000](http://localhost:4000) to view it in the browser and use any query to test the server is up !
