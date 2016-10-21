const express = require('express');

const app = express();

app.use('/public', express.static('public'));

app.use('/', function(req, res) {
    res.sendFile(__dirname + '/static/index.html')
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    throw err;
  }

  console.log('Listening at localhost:3000');
});
