const express = require('express');
const router = express.Router();
const Authcontroller = require('../controllers/auth/AuthController');
const LoginAuthentication = require('../middlewares/LoginMiddleware');
const RegisterAuthentication = require('../middlewares/RegisterMiddleware');

router.post('/register', RegisterAuthentication, Authcontroller.Register);
router.get('/register', Authcontroller.RenderRegister);
router.post('/login', LoginAuthentication, Authcontroller.Login);
router.get('/login', Authcontroller.RenderLogin);
router.get('/logout', Authcontroller.Logout);

module.exports = router;
