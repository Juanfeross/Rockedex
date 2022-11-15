import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PkmSearchService } from '../../services/pkm-search/pkm-search.service';

@Component({
  selector: 'app-pkm-search',
  templateUrl: './pkm-search.component.html',
  styleUrls: ['./pkm-search.component.scss']
})
export class PkmSearchComponent implements OnInit {

  constructor(private router:Router, private pkmSearchService: PkmSearchService) { }

  ngOnInit(): void {
  }

  onSearch(value:string) {
    if (value && value.length > 3) {
      this.pkmSearchService.search(value);
    }

    else {
      this.pkmSearchService.search('');
    }
  }

}
