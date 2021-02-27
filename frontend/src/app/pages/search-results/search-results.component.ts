import { Component, OnInit } from '@angular/core';
import { FlickrImagesService } from '../../services/flickr-images.service';
import { DataService } from '../../services/data.service';
import { PhotoData } from '../../model/photoData';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  loading: boolean = true;
  undefinedTag: boolean = false;
  emptyTag: boolean = false;
  tag: string = '';
  searchedPhotos: Array<PhotoData> = [];

  constructor(
    private flickrImagesService: FlickrImagesService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getTag();
    this.getSearchedPhotos(this.tag);
  }

  //get search results from a tag
  getSearchedPhotos(tag: string) {
    this.emptyTag = false;
    this.loading = true;

    if (tag == '' || tag.match(/^\s*$/) !== null) {
      this.loading = false;
      this.emptyTag = true;
    } else {
      this.flickrImagesService.searchFromTag(tag).subscribe((result) => {
        this.searchedPhotos = result.response;
        console.log(this.searchedPhotos);
        this.loading = false;
        if (Object.keys(this.searchedPhotos).length === 0) {
          this.undefinedTag = true;
        } else {
          this.undefinedTag = false;
        }
      });
    }
  }

  //get the tag from home component to search-results component
  getTag() {
    this.tag = this.dataService.getTag;
    console.log(this.tag, 'tag');
  }

  //change the tag in the search-results component
  changeTag(tagValue: string) {
    this.tag = tagValue;
    console.log(this.tag, 'tagg');
    this.getSearchedPhotos(this.tag);
  }
}
