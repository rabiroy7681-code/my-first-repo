require('dotenv').config()
import {} from 'rea'
console.log("Chai aur code")

const express = require('express')
const app = express()
// const port = 3000

const ab = `<h1>Welcome Jhilik Maji 💝</h1> </br> <button> Click Me Jhilu </button>`

app.get('/', (req, res) => {
  res.send(ab)
})

app.get('/facebook', (req, res)=>{
  res.send("You are in Facebook")
})
app.get('/linkdine', (req, res)=>{
  res.send("<h1>You are on Linkdine Page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
