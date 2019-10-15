const http = require('http');
const app = require('./app');

const PORT = 3005;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});