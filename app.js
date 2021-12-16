const express = require ('express');
const bars = require ('express-handlebars');
const catchAsync = require('./utils/catchAsync');
const routes = require('./routes/index');
var session = require ('express-session')

const app = express();

app.engine('handlebars', bars({ extname: '.handlebars'}));
app.set('view engine','handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(`${__dirname}/public`));

// Session Setup
const sess = {
    secret: process.env.pluginsessionsecret,
     cookie: {},
     resave: false,
     saveUninitialized: true,
     store: new SequelizeStore({
       db: sequelize
      }) 
   };

app.use(session(sess));



