import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import middleware from 'webpack-dev-middleware'
import config from '../webpack.config.dev.mjs'

// Workaround for lack of __dirname in ES6 modules
const __dirname = path.dirname(new URL(import.meta.url).pathname)

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(
  middleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
