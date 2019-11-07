const app = require('./app') // the actual Express app
const http = require('http')
const config = require('./utils/config');

const server = http.createServer(app)

server.listen(8080, () => {
  console.log(`Server running on port ${8080}\n\n`)
})