import express from "express";
import flickrRoutes from "./routes/flickrRoutes.js";
import cors from "cors";

// Initializations
const app = express();

// Port config
app.set("port", process.env.PORT || 3000);

app.use(cors({ origin: "*" }));

app.use("/api/flickr", flickrRoutes);

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

export default app;
