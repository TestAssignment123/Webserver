const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});


app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
