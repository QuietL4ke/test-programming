const express = require('express');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 5000;
const argon2 = require('argon2')
const { prepareCode, testCode } = require('./scripts/codeService')
const { User, Task, Test, Argument } = require('./scripts/initDataBase.js');
const e = require('express');
require('./scripts/DB.js')

const header = {
  'Access-Control-Allow-Origin': '*',
}

const app = express();
app.use(cors({
  origin: 'http://localhost:8080'
}));
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

const tokenKey = '1a2b-3c4d-5e6f-7g8h'

app.use(express.json())
app.use(async (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      tokenKey,
      async (err, payload) => {
        if (err) next()
        else if (payload) {
          const user = await User.findByPk(payload.id)
          if (user) {
            req.user = user
          }
          next()
        }
      }
    )
  } else {
    next();
  }
})


app.get('/katas', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authorized' })
  }
  let tasks = await Task.findAll();
  return res.status(200).send(tasks)
});

app.get('/katas/:id', async (req, res) => {
  if (!req.user)
    return res.status(401).json({ message: 'Not authorized' })
  let task = await Task.findByPk(req.params.id);
  if (!task) return res.header(header).status(404) //.then(
  res.header(header).status(200).send(task.dataValues);
})

app.post('/katas/:id', async (req, res) => {
  if (!req.user)
    return res.status(401).json({ message: 'Not authorized' })
  let code = req.body.code;
  let task = await Task.findByPk(req.params.id);
  if (!task) return res.header(header).status(404)
  let result = await testCode(code, req.params.id, User, Test, Argument)
  switch (result) {
    case 0:
      console.log('All tests are passed')
      break;
    case -1:
      console.log('Problems with DB')
      break;
    default:
      console.log(result);
  }
})

app.post('/', async (req, res) => {
  if (req.user)
    return res.status(200).json({ message: 'Already login' })
  const pass = req.body.password
  const login = req.body.login
  let user = await User.findOne({ where: { login: login } })

  if (user) {
    const truePass = user.dataValues.password;
    if (await argon2.verify(truePass, pass)) {
      return res.status(200).json({
        id: user.id,
        username: user.login,
        token: jwt.sign({ id: user.id }, tokenKey),
      })
    }
  }
  return res.status(404).json({ message: 'User not found or password is invalid' })
})

