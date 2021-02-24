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

  //on button click method
  tagSubmit(value: string) {
    if (this.router.url === '/') {
      this.tagValue = value;
      this.setTag(this.tagValue);
      this.router.navigate(['/search']);
    }
    this.tag.emit(value);
  }

  setTag(tag: string) {
    this.dataService.setTag = tag;
  }

  //on enter key method
  onKey(event: any) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.tagSubmit(event.target.value);
    }
  }
}
