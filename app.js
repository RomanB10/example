const express = require('express');

const { PORT = 3000 } = process.env;
// создаем сервер
const app = express();



// Слушаем 3000 порт
app.listen(PORT, (err) => {
  if (err) {
    console.log('Error while starting server');
  } else {
    console.log('Server has been started at port -', PORT);
  }
});
