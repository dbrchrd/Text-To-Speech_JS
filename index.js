const express = require('express');
const app = express();
const gTTS = require('gtts');
const PORT = 6060;

app.listen(PORT, function () {
  console.log(`Server is running : http://localhost:${PORT}/`);
});