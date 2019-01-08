import path from 'path'

// Workaround for lack of __dirname in ES6 modules
const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default {
  devtool: 'inline-source-map',
  // entry: [path.resolve(__dirname, 'src/index')],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.mjs',
  },
  mode: 'development',
}
