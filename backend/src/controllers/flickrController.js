import axios from "axios";
import { GenerateResponse } from "../services/responseService.js";
import config from "../config.js"

//Get all photos
export const getAllPhotos = async (req, response) => {
    console.log("getAllPhotos function start :p");

    try{
        const photos = await axios.get("https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true")  
        // console.log(photos.data.items);

        let returnres = [];

        photos.data.items.forEach(photo => {
            returnres.push({'title':photo.title, 'url':photo.media.m});
        });

        response.status(200).json(GenerateResponse("Get all photos success",returnres));

        // const photos =  await  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${config.API_KEY}&format=json&nojsoncallback=true`)
        // // console.log(photos.data.photos.photo);

        // let returnres = [];

        // photos.data.photos.photo.forEach(photo => {
        // let image = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        // returnres.push({'title':photo.title, 'url':image});
        // });

        // response.status(200).json(GenerateResponse("Get all photos success",returnres));

    } catch(err){
        console.log(err);
    }
}


//Search photos by tag
export const searchResults = async (req, response) => {
    console.log("searchPhotos function start :p");

    try{
        let tags = [req.query.tag];
        console.log(tags);

        //remove empty tags
        let processedTags = tags.filter(function (el) {
            return el != null;
          });

        //Encodes element so it can be passed in URL, ex whitespaces become %20
        processedTags = processedTags.map((el) => encodeURI(el));

        let tagList = processedTags.join(',');

        const searchPhotos =  await  axios.get(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=${tagList}`)   
        // console.log(searchPhotos.data.items);
   
        const returnResponse = [];

        searchPhotos.data.items.forEach(photo => {
            returnResponse.push({'title':photo.title, 'url':photo.media.m});
        });
        response.status(200).json(GenerateResponse("Get all photos success", returnResponse));
  
        // let tag = req.query;
        // const searchPhotos =  await  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.API_KEY}&tags=${tag.tag}&format=json&nojsoncallback=true`) 

        // const searchPhotos =  await  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.API_KEY}&tags=${tagList}&format=json&nojsoncallback=true`)
        // console.log(searchPhotos.data.photos.photo);

        // const returnResponse = [];
        // searchPhotos.data.photos.photo.forEach(photo => {
        // let image = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        // returnResponse.push({'title':photo.title, 'url':image});
        // });
        // response.status(200).json(GenerateResponse("Get all photos success", returnResponse));

    } catch(err){
        console.log(err);
    }
}