import axios from "axios";
import { FlickrService } from "../services/flickrService.js";
import { GenerateResponse } from "../services/responseService.js";

//Get all photos
export const getAllPhotos = async (req, response) => {
  let flickrService = new FlickrService();

  try {
    const photos = await axios.get(flickrService.getUrl(null));
    let returnres = flickrService.passPhotos(photos);

    response
      .status(200)
      .json(GenerateResponse("Get all photos success", returnres));
  } catch (err) {
    console.log(err);
  }
};

//Search photos by tag
export const searchResults = async (req, response) => {
  let flickrService = new FlickrService();

  try {
    let tags = [req.query.tag];
    const searchPhotos = await axios.get(flickrService.getUrl(tags));
    const returnResponse = flickrService.passPhotos(searchPhotos);

    response
      .status(200)
      .json(GenerateResponse("Get all photos success", returnResponse));
  } catch (err) {
    console.log(err);
  }
};
