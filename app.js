const express = require('express');
const cors = require('cors');

const app = express()

//middleware

app.use(cors())
app.use(express.json())

//routes
const jobRoute = require('./routes/job.route')
  // const candidateRoute = require('./routes/candidate.route')
 const hirringManagerRoute = require('./routes/manager.route')
 const userRoute  = require('./routes/user.route')


// rote api
app.get('/', (req, res) =>{
    res.send('running server')
})


const Candidate = require("./models/Candidate");


   
    
app.get('/api/v1/candidate', async (req, res) =>{
  try {
   
    const result = await Candidate.find({})
res.status(200).json({
  status: "success",
  data: result,
});
} 
catch (error) {
res.status(400).json({
  status: "fail",
  message: "cant get data",
  error: error.message,
});
}


})



app.use('/api/v1/jobs', jobRoute )
app.use('/api/v1/manager/jobs', hirringManagerRoute)
// app.use('/api/v1/candidate', candidateRoute)
app.use("/api/v1/user", userRoute);



module.exports = app


