import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit {
  constructor() {}

  @Input() item: any;

  ngOnInit(): void {
    console.log("item", this.item);
  }
}
