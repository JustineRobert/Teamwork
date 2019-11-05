const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

//Database
const db = require('./config/database');


// Test DB
db.authenticate()
  .then(() => console.log('Database is Connected Successfully'))
  .catch(err => console.log('Error:' + err))

const app = express();

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('TEAMWORK APPLICATION!'));

//User routes
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is successfully running on port ${PORT}`));
