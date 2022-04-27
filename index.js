require("dotenv").config();
const express = require("express");
const app = express();
const gTTS = require("gtts");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 6060;

app.get("/hear", (req, res) => {
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
            console.error("error: ", err);
          }
        } catch (err) {
          console.error("error: ", err);
        }
      } catch (err) {
        console.error("error: ", err);
      }
    } catch (err) {
      console.log("error: ", err);
      res.status(404);
    }
  } else {
    console.log("error: lang or text is not valid");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.listen(PORT, HOST, () => {
  console.log(
    `Open this url to hear Baguette in french http://${HOST}:${PORT}/hear?lang=fr&text=Baguette`
  );
});
