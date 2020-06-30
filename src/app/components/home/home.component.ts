import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../../models/movie.model";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  movies$: Observable<Movie[]>;
  movieSelected: Movie;
  showDetails: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.movies$ = this.movieService.getMovies();
  }

  handleMovie(currentMovie: Movie) {
    this.movieSelected = currentMovie;
    this.showDetails = true;
  }

  handleDelete(id: number) {
    this.movieService.deleteMovie(id).subscribe(
      (res) => {
        this.getMovieList();
        this.showDetails = false;
      },
      (err) => {
        console.error("error deleting movie: ", err);
      }
    );
  }
}
