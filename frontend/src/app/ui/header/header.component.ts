import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  public tag: EventEmitter<string> = new EventEmitter<string>();

  tagValue: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  tagSubmit(value: string) {
    console.log(value, 'tag-val');
    // this.tagValue = value;
    // this.setTag(this.tagValue);
    // this.router.navigate(['/search']);
    // this.tag.emit(value);
    if (this.router.url === '/') {
      this.tagValue = value;
      this.setTag(this.tagValue);
      this.router.navigate(['/search']);
    }
    this.tag.emit(value);
  }

  // onSubmit(item: any) {
  //   this.tagValue = item.value;
  //   console.log(this.tagValue);
  //   this.setTag(this.tagValue);
  //   this.router.navigate(["/search"]);
  // }

  setTag(tag: string) {
    this.dataService.setTag = tag;
  }

  onKey(event: any) {
    if (event.keyCode === 13) {
      // this.tagValue = event.target.value;
      this.tagSubmit(event.target.value);
    }
  }
}
