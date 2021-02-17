import { TestBed } from '@angular/core/testing';

import { FlickrImagesService } from './flickr-images.service';

describe('FlickrImagesService', () => {
  let service: FlickrImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickrImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
