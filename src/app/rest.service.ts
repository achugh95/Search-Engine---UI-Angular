import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { environment } from "../environments/environment"; // Environment Reference
@Injectable({
  providedIn: "root"
})
export class RestService {
  url;
  constructor(private http: HttpClient) {
    this.url = environment.baseUrl; // Intializing the url with base URL
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
  }

  // Function that accepts the input and hits the REST API.

  getSearchResult(query) {
    return this.http.get(`${this.url}/search?q=${query}`);
  }
}
