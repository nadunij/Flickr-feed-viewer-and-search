import { Component, OnInit } from '@angular/core';
import { FlickrImagesService } from '../../services/flickr-images.service';
import { PhotoData } from '../../model/photoData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photos: Array<PhotoData> = [];

  constructor(private flickrImagesService: FlickrImagesService) {}

  ngOnInit(): void {
    this.getAllPhotos();
  }

  //Get all photos
  getAllPhotos(): Array<PhotoData> {
    this.flickrImagesService.getAllPhotos().subscribe((result) => {
      this.photos = result.response;
    });
    return this.photos;
  }
}
