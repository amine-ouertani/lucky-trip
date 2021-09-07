import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../services/api-manager/api-manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  results : Array<any> ;
  keyword="";

  constructor(private apiManager: ApiManagerService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe((params) => {
      this.keyword = params["q"] === undefined ? "": params["q"];
      this.search();
    })
  }

  search(){
    if (this.keyword.trim() === "")
      return;
    this.apiManager.getResults(this.keyword).subscribe((data) => {
      this.results = data["destinations"] as Array<any>;
    });
  }

  displayResult(resultId: number){
    this.router.navigate(["/result", resultId])
  }

}
