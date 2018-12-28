import express from 'express'
import { dirname, join } from 'path'
import open from 'open'

// Workaround for lack of __dirname in ES6 modules
const __dirname = dirname(new URL(import.meta.url).pathname)

const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../src/index.html'))
})

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
