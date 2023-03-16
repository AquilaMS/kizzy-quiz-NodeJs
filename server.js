const express = require('express')
const app = express()
const db = require('./src/configs/db')
const Quiz = require('./src/models/Quiz')
const passportConfig = require('./src/configs/passport')()
const passport = require('passport')

const authRoute = require('./src/routes/Auth')
const userRoute = require('./src/routes/User')
const quizRoute = require('./src/routes/Quiz')

app.use(express.json())
app.use(passport.initialize())
app.get('/', async (req, res) => {
  try {
    await db.authenticate();
    await db.sync();
    res.status(200).send()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})

app.use('/quiz', passportConfig.authenticate(),quizRoute)
app.use('/user', passportConfig.authenticate(), userRoute)
app.use('/auth', authRoute)

app.listen(3001)