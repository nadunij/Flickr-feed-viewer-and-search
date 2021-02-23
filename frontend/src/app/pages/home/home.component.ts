import { Component, OnInit, Input } from '@angular/core';
import { FlickrImagesService } from '../../services/flickr-images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photos = [];
  public tag: string = '';

  constructor(private flickrImagesService: FlickrImagesService) {}

  ngOnInit(): void {
    this.getAllPhotos();
  }

  //Get all photos
  getAllPhotos() {
    this.flickrImagesService.getAllPhotos().subscribe((result) => {
      this.photos = result.response;
      console.log(result.response, 'response');
      console.log(result, 'result');
    });
  }
}
