const express = require('express')
const router = express.Router()
const candidateControler = require('../Controlers/candidate.controler')
router
.route('/')
.get(candidateControler.getcandidate)
.post(candidateControler.createCandidate)




module.exports = router


