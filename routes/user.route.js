const express = require('express')

const router = express.Router()
const userControler = require('../Controlers/user.controler')
const verifyToken = require('../middleware/verifyToken')



router
.route('/signup')
.post(userControler.signUp)

router
.route('/login')
.post(userControler.login)

router
.route('/me')
.get(verifyToken, userControler.getMe)





module.exports = router;