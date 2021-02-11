import express from "express";


// Initializations
const app = express();
const router = express.Router();

// Settings
app.set("port", 3000);
app.get('/', function (req, res) {
    res.send('GET requdfdfdddest to the homepage')
  })

  app.get('/search', function (req, res) {
    res.send('GET requdfdfdddest to the homepagsearche')
  })
  

app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });
  