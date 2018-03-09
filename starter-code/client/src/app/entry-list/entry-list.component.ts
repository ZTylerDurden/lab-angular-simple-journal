import { Component, OnInit } from '@angular/core';
import { RetrieveService } from "../services/retrieve.service";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [RetrieveService]
})
export class EntryListComponent implements OnInit {
  entries;

  constructor(private entry: RetrieveService) { }

  ngOnInit() {
    this.entry.getEntry()
    .subscribe((entries) => {
      this.entries = entries
    })
  }

}
