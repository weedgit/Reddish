# Reddish - A Reddit Clone - MERN

[Reddit](https://www.reddit.com) clone (a social media site) made w/ MERN stack & Redux.

## Demo


[Deployed on Netlify (front-end) & Heroku (back-end)](https://reddish.netlify.app)

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Redux w/ useDispatch & useSelector hooks](https://redux.js.org/) - For state management
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - For asynchronous actions
- [React Router](https://reactrouter.com/) - For general routing & navigation
- [Formik](https://formik.org/) - For flexible forms
- [Material-UI w/ lots of CSS customisations](https://material-ui.com/) - UI library
- [Yup](https://github.com/jquense/yup) - For form validation

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [Cloudinary](https://cloudinary.com/) - For image uploading & related API
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Validator.js](https://www.npmjs.com/package/validator) - For validation of JSON data
- [Mongoose Unique Validator](https://www.npmjs.com/package/mongoose-unique-validator) - Plugin for better error handling of unique fields within Mongoose schema
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file

## Screenshots

#### Desktop/Tablet

![Desktop-home](https://github.com/amand33p/reddish-mern/blob/master/screenshots/desktop-home.png)
![Desktop-2](https://github.com/amand33p/reddish-mern/blob/master/screenshots/desktop-2.png)
![Desktop-3](https://github.com/amand33p/reddish-mern/blob/master/screenshots/desktop-3.png)

#### Mobile

![Mobile-home](https://github.com/amand33p/reddish-mern/blob/master/screenshots/mobile-home.png)
![Mobile-2](https://github.com/amand33p/reddish-mern/blob/master/screenshots/mobile-2.png)
![Mobile-3](https://github.com/amand33p/reddish-mern/blob/master/screenshots/mobile-3.png)
![Mobile-4](https://github.com/amand33p/reddish-mern/blob/master/screenshots/mobile-4.png)
![Mobile-5](https://github.com/amand33p/reddish-mern/blob/master/screenshots/mobile-5.png)

## Usage

Notes:

- For image API, make account at cloudinary.com & get API keys from account dashboard.
- For upload preset usage, if you want to organize images separately at cloudinary.com, you have to create it from account settings first. If you don't want to, just don't put anything or use .env key - `UPLOAD_PRESET`.

#### Client:

Open client/src/backendUrl.js & change "backend" variable to `"http://localhost:3005"`

```
cd client
npm install
npm start
```

#### Server:

Note: Make sure that you have installed 'nodemon' as global package.

```
cd server
npm install
npm run dev
```
