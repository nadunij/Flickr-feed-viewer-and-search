import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlickrImagesService {
  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //Get all photos
  getAllPhotos(): Observable<any> {
    return this.http.get(this.apiURL + 'allPhotos');
  }

  //Search from tag
  searchFromTag(tag: string): Observable<any> {
    return this.http.get(this.apiURL + `search/?tag=${tag}`);
  }
}
