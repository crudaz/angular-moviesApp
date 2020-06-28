import { Component, OnInit, ViewChild } from "@angular/core";
import { Movie } from "../shared/models/movie.model";

@Component({
  selector: "movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"],
})
export class MovieItemComponent implements OnInit {
  movieSelected: any;
  constructor() {}
  ngOnInit(): void {}

  movieList: Movie[] = [
    {
      title: "Terminator",
      release: "09/08/1992",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere nisl vitae rutrum sollicitudin. Curabitur eget tellus at odio fermentum dapibus. Praesent malesuada faucibus dolor in aliquet.",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    },
    {
      title: "The Joker",
      release: "09/08/2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere nisl vitae rutrum sollicitudin. Curabitur eget tellus at odio fermentum dapibus. Praesent malesuada faucibus dolor in aliquet.",
      image: "",
    },
  ];

  getMovie(elem) {
    this.movieSelected = elem;
  }
}
