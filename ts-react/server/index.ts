const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const BodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny'));
