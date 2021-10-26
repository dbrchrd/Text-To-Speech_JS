const express = require('express');
const app = express();
const gTTS = require('gtts');
const PORT = 6060;

app.get('/hear', function (req, res) {
  if (req.query.text !== "" && req.query.lang !== "") {

  } else {
    console.log("errr: lang or text is not valid");
  }
});

app.listen(PORT, function () {
  console.log(`Open url to hear Baguette http://localhost:${PORT}/hear?lang=fr&text=Baguette`);
});
