let express = require('express');
let app = express();




app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({
      echo: word
    });
  });































 module.exports = app;
