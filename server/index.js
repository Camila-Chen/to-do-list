// const express = require('express')
// const app = express()
// const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist',{useNewUrlParser: true})

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ');
})

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = mongoose;