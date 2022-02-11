import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { apiResponse } from "./data.model";
import { DataService } from "./data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  users$: Observable<apiResponse> = new Observable();

  constructor(private data: DataService) {}

  // on init the Dataservice getUsers() function supplies a user observable.
  ngOnInit () {
    this.users$ = this.data.getUsers();
  };
}
