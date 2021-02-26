import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { FlickrImagesService } from './flickr-images.service';
import { HttpClient } from '@angular/common/http';

describe('FlickrImagesService', () => {
  let service: FlickrImagesService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    // service = TestBed.inject(FlickrImagesService);
    service = new FlickrImagesService(TestBed.inject(HttpClient));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
