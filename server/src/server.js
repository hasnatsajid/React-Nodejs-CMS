const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb://localhost:27017/cms';

const server = http.createServer(app);

mongoose.connection.on('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

startServer();