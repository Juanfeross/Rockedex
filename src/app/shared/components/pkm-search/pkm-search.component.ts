import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PkmSearchService } from '../../services/pkm-search/pkm-search.service';

@Component({
  selector: 'app-pkm-search',
  templateUrl: './pkm-search.component.html',
  styleUrls: ['./pkm-search.component.scss']
})
export class PkmSearchComponent implements OnInit {
  public searchValue = '';

  constructor(private router:Router, private pkmSearchService: PkmSearchService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.searchValue = this.searchValue.trim();
    const toNumber = parseInt(this.searchValue, 10);
    if (toNumber) {
      this.pkmSearchService.search(toNumber.toString());
    }
    else {
      this.pkmSearchService.search(this.searchValue.toLowerCase());
    }
  }
}
