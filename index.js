//imports
const express = require('express');
const cors = require('cors');
const path = require('path');
const flash = require('express-flash');
const AuthRoutes = require('./routes/AuthRoutes');
const PostRoutes = require('./routes/PostRoutes');
const LikesRoutes = require('./routes/likesRoutes');
//custom middlewares
const sessionConfig = require('./middlewares/sessionConfig');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const sessionLocal = require('./middlewares/sessionLocalMiddleware');
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
app.use(express.urlencoded({ extended: true }));
//use custom middlewares
app.use(sessionConfig);
app.use(sessionMiddleware);
app.use(sessionLocal);

//routes
app.use('/', AuthRoutes);
app.use('/', PostRoutes);
app.use('/', LikesRoutes);
//models

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
