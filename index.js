const express = require('express');
const app = express();
const gTTS = require('gtts');
const PORT = 6060;

app.get('/hear', function (req, res) {
  if (req.query.text !== "" && req.query.lang !== "") {
    try {
      console.log("I understand, wait a few moments, file being processed !");
      try {
        const gtts = new gTTS(req.query.text, req.query.lang);
      	console.log("Your file is processed !");
      } catch (err) {
      	console.error(err);
      }
    } catch (e) {
      console.log("err ", e);
      res.status(404)
    }
  } else {
    console.log("errr: lang or text is not valid");
  }
});

app.listen(PORT, function () {
  console.log(`Open url to hear Baguette http://localhost:${PORT}/hear?lang=fr&text=Baguette`);
});
