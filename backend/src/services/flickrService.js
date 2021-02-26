export class FlickrService {
  getUrl(tags) {
    let queryParameters = "";

    if (tags != null) {
      let processedTags = tags.filter((element) => {
        return element.replace(/\s/g, "").length > 0;
      });

      //Encodes element so it can be passed in URL, ex whitespaces become %20
      processedTags = processedTags.map((element) => encodeURI(element));

      if (processedTags.length > 0) {
        let tagList = processedTags.join(",");
        queryParameters = `&tags=${tagList}`;
      }
    }
    return `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true${queryParameters}`;
  }

  passPhotos(photos) {
    let returnResponse = [];

    photos.data.items.forEach((photo) => {
      returnResponse.push({ title: photo.title, url: photo.media.m });
    });
    return returnResponse;
  }
}
