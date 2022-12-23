const server = require('./server')

const PORT = process.env.PORT || 8001
server.listen(PORT, function() {
  if (server.listening) {
    console.log(`Server is listening on port ${PORT}`);
  }
})