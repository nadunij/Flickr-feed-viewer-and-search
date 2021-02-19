import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tagValue: string = "";
  tag: string = "";
  searchedPhotos = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  // onKey(event: any) {
  //   this.tag = event.target.value;
  //   console.log(this.tag);
  // }


  onSubmit(item: any) {
    this.tagValue = item.value;
    console.log(this.tagValue);
    this.setTag(this.tagValue);
    this.router.navigate(["/search"]);
  }

  setTag(tag: string){
    this.dataService.setTag = tag;
  }

  // async getSearchResults(search: any){
  //   const res = await this.flickrImagesService.searchFromTag(search)
  //   console.log(res, "fghj");
  //   if (res){
  //     this.router.navigate(["/search"])
  //   }
  // }

}
