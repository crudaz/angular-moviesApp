import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  @Input() items: any;

  ngOnInit(): void {
    console.log("items", this.items);
  }
}
