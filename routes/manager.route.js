const express = require('express')
const router = express.Router()
const hirringManagerControler = require('../Controlers/manager.controler')
const authorization = require('../middleware/authorization')
const verifyToken = require('../middleware/verifyToken')

router
.route('/')
.get(hirringManagerControler.getManagerJob)

router.route('/:id')
.get(verifyToken, authorization('manager', 'admin'), hirringManagerControler.getManagerDetailsById)

 module.exports = router