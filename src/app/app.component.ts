import { Component, OnInit } from "@angular/core";
import { RestService } from "./rest.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Search-Engine";
  input_word: any;
  results: any;
  submitted: boolean;

  constructor(private service: RestService) {}

  ngOnInit() {
    this.submitted = false;
  }

  search(input_word) {
    this.input_word = input_word;
    console.log(this.input_word);
    this.service.getSearchResult(this.input_word).subscribe((res: {}) => {
      console.log(res);
      this.results = res;
      this.submitted = true;
    });
  }
}
