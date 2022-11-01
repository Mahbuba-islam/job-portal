const express = require('express');
const cors = require('cors');

const app = express()

//middleware

app.use(cors())
app.use(express.json())


// rote api
app.get('/', (req, res) =>{
    res.send('running server successfully')
})



module.exports = app
