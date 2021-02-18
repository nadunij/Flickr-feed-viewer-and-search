import axios from "axios";
import { GenerateErrorCode, GenerateResponse } from "../services/responseService.js";
import config from "../config.js"

//move the logic into a different file (find the proper structure first)


//Get all photos

export const getAllPhotos = async (req, response) => {
    console.log("getAllPhotos function start :p");

    try{
        const photos =  await  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${config.API_KEY}&format=json&nojsoncallback=true`) 
        // console.log(typeof photos.data.photos.photo);    
        // console.log(photos.data.photos.photo);
   
        // "https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"
        const returnres = {}
        photos.data.photos.photo.forEach(photo => {
        let image = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        returnres[photo.id] = image
        });
        response.status(200).json(GenerateResponse("Get all photos success",returnres));
  
    } catch(err){
        console.log(err);
    }
}

//Search photos by tag

export const searchResults = async (req, response) => {
    console.log("searchPhotos function start :p");

    try{
        let tag = req.query;
        console.log("tag.........   :p");
        console.log(tag);
        const searchPhotos =  await  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.API_KEY}&tags=${tag.tag}&format=json&nojsoncallback=true`) 
        // console.log(typeof photos.data.photos.photo);    
        // console.log(searchPhotos.data.photos.photo);
   
        // "https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"
        const returnResponse = {}
        searchPhotos.data.photos.photo.forEach(photo => {
        let image = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        returnResponse[photo.id] = image
        });
        response.status(200).json(GenerateResponse("Get all photos success", returnResponse));
  
    } catch(err){
        console.log(err);
    }
}