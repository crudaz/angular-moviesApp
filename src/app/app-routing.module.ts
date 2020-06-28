import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MovieComponent } from "./movie/movie.component";
import { TopComponent } from "./top/top.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "add-movie", component: MovieComponent },
  { path: "top5", component: TopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
