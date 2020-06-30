import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { Movie } from "../../models/movie.model";

@Component({
  selector: "movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
