import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RetrieveService } from "../services/retrieve.service";


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [RetrieveService]
})
export class SingleEntryComponent implements OnInit {
  entry: any;

  constructor(private route: ActivatedRoute, private router: Router, private retrieveService: RetrieveService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntry(params["id"]);
    })
  }
getEntry(id) {
  this.retrieveService.get(id)
  .subscribe((entry) => {
    this.entry = entry;
  })
}

}
