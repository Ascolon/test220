import { HttpService } from './services/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from './services/urls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService, UrlService]
})
export class AppComponent implements OnInit {

  loading: Boolean = true;
  genres = [];
  constructor( private http: HttpService, private route: Router) {  }

  ngOnInit() {
    this.startLoad();
  }



  startLoad() {

    this.loading = true;
    this.http.getGenres().subscribe((s) => {
      for (const genre of s.json()) {
        this.genres.push(genre.Name);
      }
    }, (e) => {
      this.startLoad();
    }, () => {
      this.loading = false;
    });
  }

  redirect(genre) {
    // this.route.navigateByUrl('/film');
  }
}
