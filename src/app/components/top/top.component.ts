import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "src/app/models/movie.model";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-top",
  templateUrl: "./top.component.html",
  styleUrls: ["./top.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TopComponent implements OnInit {
  private EXTERNAL_URL = "http://www.mocky.io/v2/5dc3c053300000540034757b";
  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getTopMovies();
  }

  getTopMovies() {
    this.movies$ = this.movieService.getMovies(this.EXTERNAL_URL);
  }
}
