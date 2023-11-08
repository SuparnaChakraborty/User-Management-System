//require('dotenv').config();

//import express, { urlencoded, json, static } from 'express';
import expressLayout from 'express-ejs-layouts';
import methodOverride from 'method-override';
import { flash } from 'express-flash-message';
import session from 'express-session';
//import connectDB from './server/config/db';

const app = express();
const port = process.env.PORT || 5000;

// Connect to Database  
//connectDB()


app.use(urlencoded({ extended: true }));
app.use(json());
app.use(methodOverride('_method'));

// Static Files
//app.use(static('public'));

// Express Session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  })
);

// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage' }));


app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/customer'))

// Handle 404
app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(port, ()=> {
  console.log(`App listening on port ${port}`)
});
