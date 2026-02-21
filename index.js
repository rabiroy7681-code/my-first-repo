require('dotenv').config()
console.log("Chai aur code")

const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!. It\'s a Home Page.... ')
})

app.get('/facebook', (req, res)=>{
  res.send("<h2> You are on <h1>Facebook</h1> Page </h2>")
})
app.get('/linkdine', (req, res)=>{
  res.send("<h1>You are on Linkdine Page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
