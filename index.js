//imports
const express = require('express');
const cors = require('cors');
const path = require('path');
const flash = require('express-flash');
const AuthRoutes = require('./routes/AuthRoutes');

//custom middlewares
const sessionConfig = require('./middlewares/sessionConfig');
const sessionMiddleware = require('./middlewares/sessionMiddleware');

//variables
const PORT = process.env.PORT || 3000;
const app = express();

//engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(flash());
app.use(express.urlencoded({ extended: true }));
//use custom middlewares
app.use(sessionConfig);
app.use(sessionMiddleware);

//routes
app.get('/', (req, res) => {
  const bodyComponent = 'components/home';
  const title = 'home';
  res.render('main', { title, bodyComponent });
});

app.use('/', AuthRoutes);
//models

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
