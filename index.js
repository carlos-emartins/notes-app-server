const express = require('express')
const app = express()

const cors = require('cors')

app.use(express.json())
app.use(cors())

const database = require('./models')

const notesRouter = require('./routes/Notes')
app.use('/notes', notesRouter)

database.sequelize
  .sync()
  .then(() => {
    app.listen(3001, () => {
      console.log('listening on http://localhost:3001')
    })
  })
  .catch((err) => {
    console.log(err)
  })
