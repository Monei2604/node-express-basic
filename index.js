const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res) => {
 
  const posts = [{
    firstName: "John",
    lastName:"Doe"
  },{
    firstName: "John",
    lastName:"Doe"
  }]

  res.json(posts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})