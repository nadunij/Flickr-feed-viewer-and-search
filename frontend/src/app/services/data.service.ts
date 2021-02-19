import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public tag: string = "";

  constructor() { }

  set setTag(val: string){
    this.tag = val;
  }

  get getTag(): string{
    return this.tag;
  }
}
