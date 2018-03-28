import { UrlService } from './urls.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpService {
  constructor(private http: Http, private urls: UrlService) {}
  body;
  getGenres() {
    return this.http.get(this.urls.getGenres);
  }
  getLastUpdate() {
    return this.http.get(this.urls.getUpdate);
  }

}
