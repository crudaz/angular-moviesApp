import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.model";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private ROOT_URL = "http://localhost:3000/movies";

  constructor(private http: HttpClient) {}

  getMovies(url?: string) {
    let currentUrl: string;
    url ? (currentUrl = url) : (currentUrl = this.ROOT_URL);
    return this.http.get<Movie[]>(currentUrl);
  }

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie).pipe(
      tap((movie) => console.log(`added movie w/ movie=${movie}`)),
      catchError(this.handleError<any>("addMovie"))
    );
  }

  deleteMovie(id: any) {
    return this.http.delete(`${this.ROOT_URL}/${id}`).pipe(
      tap((_) => console.log(`deleted movie id=${id}`)),
      catchError(this.handleError<any>("deleteMovie"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
