import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiManagerService } from '../services/api-manager/api-manager.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  destination: any;
  keyword: String;
  constructor(private apiManager: ApiManagerService, private activatedRouter: ActivatedRoute, private router: Router, private elementRef: ElementRef,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      let destinationId = params.id;
      this.apiManager.getDestinationInformation(destinationId).subscribe((data) => {
        this.destination = data["destination"];
        this.refreshBackground();
      })
    })
  }

  search(): void {
    this.router.navigate(["/"], { queryParams: { q: this.keyword } })
  }

  refreshBackground() {
    this.document.body.style.backgroundImage = `url('${this.destination.thumbnail.image_url}')`;
  }
}
