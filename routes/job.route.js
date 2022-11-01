const express = require('express')
const router = express.Router()
const jobControler = require('../Controlers/job.controler')


router
.route('/')
 .get(jobControler.getJob)
.post(jobControler.createJob)

router
.route('/:id/apply')
.post(jobControler.applyJobById)


router
.route('/:id')
.patch(jobControler.updateJobById)



module.exports = router;