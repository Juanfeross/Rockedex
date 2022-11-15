import { Component, OnInit } from '@angular/core';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';
import { PkmSearchService } from 'src/app/shared/services/pkm-search/pkm-search.service';
import { utils } from 'src/assets/utils/utils';

@Component({
  selector: 'app-pkm-list',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.scss']
})
export class PkmListComponent implements OnInit {
public addPkm: IPokemon[] = [];
public tempAddPkm: IPokemon[] = [];
public quantityPkm = 0;
public tempQuantityCards: number[] = [];
private utils = new utils();



  constructor(private pkmService: PkmService, private pkmSearchService: PkmSearchService) { }

  ngOnInit(): void {
    this.getPokemons();
    this.getPkmSearch();
  }

  public getPokemons(next?: boolean) {
    const quantity = sessionStorage.getItem('quantityPkm') ?? 0;
    this.quantityPkm = +quantity;
    this.tempAddPkm = next ? this.tempAddPkm : [];
    for (let i = 0; i < this.quantityPkm; i++) {
      this.tempQuantityCards.push(i);

    }
    console.log(this.quantityPkm);
    this.pkmService
      .getPokemon(next ? 12 : this.quantityPkm, next ? this.quantityPkm : 0)
      .subscribe((response) => {
        response.results.forEach((element) => {
          console.log(this.tempAddPkm);
          this.getPkmDetail(element.url);
        });
      });
  }

  // onScroll() {
  //   this.pkmService.getPokemon(next ? 12 : this.quantityPkm, next ? this.quantityPkm : 0)
  //   .subscribe((response) => {
  //     response.results.forEach((element) => {
  //       console.log(this.tempAddPkm);
  //       this.getPkmDetail(element.url);
  //     });
  //   });
  // }

  private getPkmSearch() {
    this.pkmSearchService.OnSearch.subscribe(
      response => {
        this.tempAddPkm = [];
        this.addPkm = [];
        this.getPkmDetail(response);
      }
    )
  }

  private getPkmDetail(url: string = '', isPath: boolean = false) {
    this.pkmService.getPokemonId(url, isPath).subscribe((response) => {
      this.tempAddPkm.push(response);
      this.addPkm = this.utils.getPkmOrder(this.tempAddPkm);
      const quantity = this.quantityPkm + 12;
      if (this.addPkm.length === quantity) {
        sessionStorage.setItem(
          'quantityPkm',
          JSON.stringify(this.addPkm.length)
        );
        // this.pkmTempService.ListPokemons(this.addPkm);
      }
    });
  }

  // private getPkmDetail(url: string = '') {
  //   this.pkmService.getPokemonId(url, false).subscribe(
  //     response => {
  //       this.tempAddPkm.push(response);
  //       this.addPkm = this.utils.getPkmOrder(this.tempAddPkm);
  //       sessionStorage.setItem('pokemons', JSON.stringify(this.addPkm));
  //     }
  //   )
  // }


}
