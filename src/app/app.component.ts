import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-moviesApp";

  navItems = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Add Movie",
      link: "/add-movie",
    },
    {
      name: "Top 5",
      link: "/top5",
    },
  ];
}
