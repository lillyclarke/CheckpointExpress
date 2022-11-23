const express = require('express');
const app = express();
const router = require('./routes/index');
const todos = require('.//models/express-models/todos');
//const bodyParser = require('body parser');

morgan = require('morgan');
app.use(morgan('dev'));

module.exports = app; // this line is only used to make testing easier.

//app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use('/users', router);

app.use((err, req, res, next) => {
res.sendStatus(err.status);
});

if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.






