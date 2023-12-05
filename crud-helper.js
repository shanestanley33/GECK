// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Category = require('./models/category');
const Order = require('./models/plant');

// Local variables will come in handy for holding retrieved documents
let user, category, plant;
let users, categories, plants;
