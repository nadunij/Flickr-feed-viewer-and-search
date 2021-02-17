import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlickrImagesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl;

  //Get all photos
  getAllPhotos(): Observable<any> {
    return this.http.get(this.apiURL + 'allPhotos');
  }
}
