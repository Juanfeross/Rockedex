import { Component, OnInit } from '@angular/core';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';
import { PkmSearchService } from 'src/app/shared/services/pkm-search/pkm-search.service';

@Component({
  selector: 'app-pkm-list',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.scss']
})
export class PkmListComponent implements OnInit {
public addPkm: IPokemon[] = [];
public tempAddPkm: IPokemon[] = [];

  constructor(private pkmService: PkmService, private pkmSearchService: PkmSearchService) { }

  ngOnInit(): void {
    this.pkmService.getPokemon().subscribe(
      response => {
        response.results.forEach(element => {
          this.getPkmDetail(element.url);
        });
      }
    )
    this.getPkmSearch();
  }

  private getPkmSearch() {
    this.pkmSearchService.OnSearch.subscribe(
      response => {
        this.getPkmDetail(response);
      }
    )
  }

  private getPkmDetail(url: string = '') {
    this.pkmService.getPokemonId(url, false).subscribe(
      response => {
        this.tempAddPkm.push(response);
        this.addPkm = this.getPkmOrder();
        sessionStorage.setItem('pokemons', JSON.stringify(this.addPkm));
      }
    )
  }

  private getPkmOrder(): IPokemon[] {
    const list = this.tempAddPkm.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    return list;
  }
}
