import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  @Input() title: string;
  @Input() items: Array<String>;

  constructor() {}
  ngOnInit(): void {}
}
