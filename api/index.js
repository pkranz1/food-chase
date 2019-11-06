const app = require('./app') // the actual Express app
const http = require('http')
const PORT = 8001;

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}\n\n`)
})