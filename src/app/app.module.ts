import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";

// Components
import { HomeComponent } from "./components/home/home.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MovieAddComponent } from "./components/movie-add/movie-add.component";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";
import { MovieItemComponent } from "./components/movie-item/movie-item.component";
import { TopComponent } from "./components/top/top.component";
import { MovieService } from "./services/movie.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MovieAddComponent,
    MovieDetailComponent,
    MovieItemComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
