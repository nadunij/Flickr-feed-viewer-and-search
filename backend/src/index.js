import express from "express";
import flickrRoutes from "./routes/flickrRoutes.js";

// Initializations
const app = express();
// const router = express.Router();

// Port config
app.set("port", process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })

app.get('/search', function (req, res) {
    res.send('search function')
  })
  
app.use("/api/flickr", flickrRoutes)

app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });

  export default app;
  