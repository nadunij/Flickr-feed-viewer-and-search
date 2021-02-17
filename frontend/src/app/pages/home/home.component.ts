import { Component, OnInit } from '@angular/core';
import { FlickrImagesService } from "../../services/flickr-images.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photos = [];

  constructor(private flickrImagesService: FlickrImagesService) { }

  ngOnInit(): void {
    this.getAllPhotos();
  }

  //Get all photos
  getAllPhotos() {
    this.flickrImagesService.getAllPhotos().subscribe(result => {
      this.photos = result.response;
      console.log(result.response);


    })

  }
}
