const express = require('express');
const cors = require('cors');

const app = express()

//middleware

app.use(cors())
app.use(express.json())

//routes
const jobRoute = require('./routes/job.route')
  const candidateRoute = require('./routes/candidate.route')
 const hirringManagerRoute = require('./routes/manager.route')
 const userRoute  = require('./routes/user.route')


// rote api
app.get('/', (req, res) =>{
    res.send('running server')
})

app.get('/api/v1/jobs', (req, res) =>{
  res.send('running server success')
})



app.use('/api/v1/jobs', jobRoute )
app.use('/api/v1/manager/jobs', hirringManagerRoute)
app.use('/api/v1/candidate', candidateRoute)
app.use("/api/v1/user", userRoute);



module.exports = app


