import { Component, OnInit } from '@angular/core';
import { FlickrImagesService } from '../../services/flickr-images.service';
import { DataService } from '../../services/data.service';
import { HeaderComponent } from '../../ui/header/header.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  loading: boolean = true;
  undefinedTag: boolean = false;
  tag: string = '';
  searchedPhotos = [];

  constructor(
    private flickrImagesService: FlickrImagesService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    console.log('OnInit...');
    this.getTag();
    this.getSearchedPhotos(this.tag);
  }

  getSearchedPhotos(tag: string) {
    this.loading = true;
    console.log('z');
    this.flickrImagesService.searchFromTag(tag).subscribe((result) => {
      this.searchedPhotos = result.response;
      console.log(this.searchedPhotos, 'data');
      this.loading = false;
      if (Object.keys(this.searchedPhotos).length === 0) {
        this.undefinedTag = true;
      } else {
        this.undefinedTag = false;
      }
    });
  }

  getTag() {
    this.tag = this.dataService.getTag;
    console.log(this.tag);
  }

  getTheTag(tagValue: string) {
    this.tag = tagValue;
    console.log(this.tag, 'tag-came');
    this.getSearchedPhotos(this.tag);
  }
}
