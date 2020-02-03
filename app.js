const express = require('express');
const mongoose = require('mongoose');
//const passport = require('passport');
//const path=require('path');
var bodyParser = require("body-parser");
//const session = require('express-session');
var authRouter = require('./routes/users');
var cors =  require('cors');

const app = express();
//require('./config/passport')(passport);


const dbPort = process.env.DB_PORT || 27017;
const dbUrl = process.env.MONGO_NAME || "localhost";
const dbCollection = process.env.DB_COLLECTION || "rms";

mongoose.connect(`mongodb://${dbUrl}/${dbCollection}`, {useNewUrlParser: true})
    .then(_ => console.log('MongoDB connection success'))
.catch(err => console.error(err));
mongoose.set('useCreateIndex', true);

/*app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/', authRouter);


const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));


// var express = require('express');
// const mongoose = require('mongoose');
// var authRouter = require('./routes/users');
// var http = require('http');
// var cors =  require('cors');


// var app = express();

// const dbPort = process.env.DB_PORT || 27017;
// const dbUrl = process.env.MONGO_NAME || "localhost";
// const dbCollection = process.env.DB_COLLECTION || "dev";

// mongoose.connect(`mongodb://${dbUrl}/${dbCollection}`, {useNewUrlParser: true})
//     .then(_ => console.log('MongoDB connection success'))
// .catch(err => console.error(err));
// mongoose.set('useCreateIndex', true);


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors())
// app.use('/api/', authRouter);



// var port = process.env.PORT || '8000';
// app.set('port', port);

// var server = http.createServer(app);
// server.listen(port);

