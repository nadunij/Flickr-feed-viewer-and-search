import express from "express";
import { getAllPhotos, searchResults } from "../controllers/flickrController.js";

const router = express.Router();

//retrieving all photos
router.get("/allPhotos", getAllPhotos);

//retrieving search results by tag
// router.get("/searchResults", searchResults);
router.get("/search", searchResults);

export default router;