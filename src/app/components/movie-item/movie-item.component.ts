import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Movie } from "../../models/movie.model";

@Component({
  selector: "movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Output() eventDelete: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  handleClick(id: number) {
    this.eventDelete.emit(id);
  }
}
