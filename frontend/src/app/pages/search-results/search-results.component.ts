import { Component, OnInit } from '@angular/core';
import { FlickrImagesService } from "../../services/flickr-images.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  loading: boolean = true;
  tag: string = "";
  searchedPhotos = [];

  constructor(private flickrImagesService: FlickrImagesService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getTag();
    this.getSearchedPhotos(this.tag);
  }

  getSearchedPhotos(tag: string) {
    this.flickrImagesService.searchFromTag(tag).subscribe(result => {
      this.searchedPhotos = result.response;
      this.loading = false;
    })
  }

  getTag(){
    this.tag = this.dataService.getTag;
  }

}
