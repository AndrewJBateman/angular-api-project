import { Component, Input, OnInit } from "@angular/core";
import { Data } from "../data.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() user: Data;

  constructor() {}

  ngOnInit(): void {}
}
