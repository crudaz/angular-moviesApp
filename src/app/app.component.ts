import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title: string = "The Movies App";
  navItems: Array<any> = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Add Movie",
      link: "/add",
    },
    {
      name: "Top 5",
      link: "/top5",
    },
  ];
}
