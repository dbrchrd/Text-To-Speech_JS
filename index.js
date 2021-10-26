const express = require('express');
const app = express();
const gTTS = require('gtts');
const PORT = 6060;

app.listen(PORT, function () {
  console.log('Open url to hear Baguette http://localhost:3000/hear?lang=fr&text=Baguette');
});
