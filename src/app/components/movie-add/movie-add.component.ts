import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MovieService } from "src/app/services/movie.service";
import { Router } from "@angular/router";
import { Observable, fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

@Component({
  selector: "movie-add",
  templateUrl: "./movie-add.component.html",
  styleUrls: ["./movie-add.component.scss"],
})
export class MovieAddComponent implements OnInit {
  movieForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    release: new FormControl("", [Validators.required]),
    description: new FormControl(""),
    image: new FormControl("", [Validators.required]),
  });

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {}

  addMovie() {
    console.log("this.movieForm", this.movieForm);
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(
        (res) => {
          this.movieForm.reset();
          this.router.navigate(["/"]);
        },
        (err) => {
          console.error("failed add movie: ", err);
        }
      );
    }
  }

  onUploadImage(event) {
    if (event.target.files && event.target.files.length > 0) {
      const fileReader = new FileReader();
      let imageToUpload = event.target.files.item(0);
      this.imageToBase64(fileReader, imageToUpload).subscribe(
        (base64image) => {
          this.movieForm.get("image").setValue(base64image);
        },
        (err) => {
          console.error("failed upload image: ", err);
        }
      );
    }
  }

  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, "load").pipe(pluck("currentTarget", "result"));
  }
}
