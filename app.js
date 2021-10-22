const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('CisforcookieandthatsgoodenoughformeCisforcookieandthatsgoodenoughforme'))

app.post('/login', (req, res) => {
  res.cookie('name', req.body.name
)
  res.redirect('/hello')
})

app.get('/hello', (req, res) => {
  res.send(`Welcome ${req.cookies.name}`)
})

const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))