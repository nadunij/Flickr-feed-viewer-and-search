// import { FlickrUrl } from "../controllers/flickrUrl.js";
import { FlickrService } from "../services/flickrService.js";
import fixture from "./fixture";
// import { FlickrUrl } from "./flickrUrl.js";

describe("flickrUrl", () => {
  let flickrServiceInstance;

  beforeEach(() => {
    flickrServiceInstance = new FlickrService();
  });

  test("should return url with a single tag", () => {
    expect(flickrServiceInstance.getUrl(["yellow"])).toBe(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=yellow"
    );
  });

  test("should return url with multiple tags", () => {
    expect(flickrServiceInstance.getUrl(["yellow", "bird"])).toBe(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=yellow,bird"
    );
  });

  test("should ignore empty tags", () => {
    expect(flickrServiceInstance.getUrl(["yellow", "bird", ""])).toBe(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=yellow,bird"
    );
  });

  test("should return base url if no tag is valid", () => {
    expect(flickrServiceInstance.getUrl([" ", "   "])).toBe(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true"
    );
  });

  test("should returns base url if you pass null", () => {
    expect(flickrServiceInstance.getUrl(null)).toBe(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true"
    );
  });

  test("should returns url with a tag with multiple words", () => {
    expect(flickrServiceInstance.getUrl(["yellow bird"])).toBe(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=yellow%20bird"
    );
  });
});

describe("passPhotos", () => {
  let flickrServiceInstance;

  beforeEach(() => {
    flickrServiceInstance = new FlickrService();
  });

  test("should find right number of entries", () => {
    expect(flickrServiceInstance.passPhotos(fixture).length).toBe(20);
  });

  test("should find first element", () => {
    const expectedResult = {
      title: "Рома – Милан. Прогноз на матч 28 февраля 2021. Чемпионат Италии",
      url: "https://live.staticflickr.com/65535/50980635503_66ae9ffef4_m.jpg",
    };
    expect(flickrServiceInstance.passPhotos(fixture)[0]).toEqual(
      expectedResult
    );
  });
});
