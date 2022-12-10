const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
// создаем сервер
const app = express();

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB!!!');
});


// Слушаем 3000 порт
app.listen(PORT, (err) => {
  if (err) {
    console.log('Error while starting server');
  } else {
    console.log('Server has been started at port -', PORT);
  }
});
