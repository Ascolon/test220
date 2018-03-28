import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  constructor() {}

  getGenres = 'http://ascolon1991-001-site1.atempurl.com/Film/GetAllGenre';
  getUpdate = 'http://ascolon1991-001-site1.atempurl.com/Film/GetLastAdded';
}
