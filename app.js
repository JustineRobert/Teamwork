const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

//Database
const db = require('./config/database');


// Test DB
db.authenticate()
  .then(() => console.log('Database Connected Successfully'))
  .catch(err => console.log('Error:' + err))

const app = express();

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('TEAMWORK'));

//Team routes
app.use('/teams', require('./routes/teams'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));







