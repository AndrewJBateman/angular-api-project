import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { apiResponse } from "./data.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers = (): Observable<apiResponse> => {
    return this.http.get<apiResponse>("https://reqres.in/api/users");
  };
}
