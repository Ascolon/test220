import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { HoveredDirective } from '../directives/hovered.directive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService, HoveredDirective]
})
export class HomeComponent implements OnInit  {
  loading: Boolean = true;
  failed: Boolean = false;
  searching = '';

  movies = [];
  constructor( private http: HttpService, private route: Router) {  }

  ngOnInit() {
    this.startLoad();
  }



  startLoad() {
    this.failed = false;
    this.loading = true;
    this.http.getLastUpdate().subscribe((s) => {
      for (const movie of s.json()) {
        this.movies.push(movie);
      }
    }, (e) => {
      this.loading = false;
      this.failed = true;
    }, () => {
      this.loading = false;
      this.failed = false;
    });
  }

  redirect(movie) {
    // this.route.navigateByUrl('/film');
  }
}
