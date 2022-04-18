const express = require("express");
const app = express();
const gTTS = require("gtts");
const PORT = 6060;
const HOST = "127.0.0.1";

app.get("/hear", function (req, res) {
  if (req.query.text !== "" && req.query.lang !== "") {
    try {
      console.log("I understand, wait a few moments, file being processed !");
      try {
        const gtts = new gTTS(req.query.text, req.query.lang);
        console.log("Your file is processed !");
        try {
          res.header(
            "Content-Disposition",
            `attachment; filename="${req.query.text} · [${req.query.lang}].mp3"`
          );
          console.log("Your file is OK to download !");
          try {
            gtts.stream().pipe(res);
            console.log("Downloading...");
          } catch (err) {
            console.error(err);
          }
        } catch (err) {
          console.error(err);
        }
      } catch (err) {
        console.error(err);
      }
    } catch (e) {
      console.log("err ", e);
      res.status(404);
    }
  } else {
    console.log("errr: lang or text is not valid");
  }
});

app.listen(PORT, HOST, function () {
  console.log(
    `Open url to hear Baguette http://${HOST}:${PORT}/hear?lang=fr&text=Baguette`
  );
});
