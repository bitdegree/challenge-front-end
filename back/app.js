const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')
require('dotenv').config()

mongoose.connection.on('error', function(err) {
    console.log(err)
})
  
mongoose.connect('mongodb+srv://admin:bitdegree@cluster0.i9okb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => console.log('connected'))

const corsOptions = {
    exposedHeaders: ['token']
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/', routes)

app.listen(5000)