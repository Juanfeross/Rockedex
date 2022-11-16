import { Component, OnInit, OnDestroy } from '@angular/core';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';
import { PkmSearchService } from 'src/app/shared/services/pkm-search/pkm-search.service';
import { utils } from 'src/assets/utils/utils';
import { IPkmPokemons } from '../../shared/interfaces/pkm-pokemons/pkm-pokemons';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pkm-list',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.scss']
})
export class PkmListComponent implements OnInit, OnDestroy {
public addPkm: IPokemon[] = [];
public tempAddPkm: IPokemon[] = [];
public quantityPkm = 0;
public tempQuantityCards: number[] = [];
private utils = new utils();
private onDestroy$ = new Subject<boolean>();



  constructor(private pkmService: PkmService, private pkmSearchService: PkmSearchService) { }
  ngOnInit(): void {
    this.getPokemons();
    this.getPkmSearch();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  public getPokemons(next?: boolean) {
    const quantity = sessionStorage.getItem('quantityPkm') ?? 0;
    const offset = next ? this.quantityPkm: 0;
    this.quantityPkm = (+quantity === 0?12:+quantity) + (next ?12:0);
    const limit = next ? 12: this.quantityPkm;
    this.tempAddPkm = next ? this.tempAddPkm : [];
    this.validateSkeleton();
    this.pkmService
      .getPokemon(limit, offset).pipe(takeUntil(this.onDestroy$))
      .subscribe((response) => {
        response.results.forEach((element) => {
          this.getPkmDetail(element.url);
        });
      });
  }

  onScroll(): void {
    this.getPokemons(true);
  }

  private getPkmSearch() {
    this.pkmSearchService.OnSearch.pipe(takeUntil(this.onDestroy$)).subscribe(
      response => {
        this.quantityPkm = 1;
        this.tempAddPkm = [];
        this.validateSkeleton();
        this.addPkm = [];
        this.getPkmDetail('pokemon/' + response, true);
      }
    )
  }

  private getPkmDetail(url: string = '', isPath: boolean = false) {
    this.pkmService.getPokemonId(url, isPath).pipe(takeUntil(this.onDestroy$)).subscribe((response) => {
      response.isFavorite = this.favoritesInList(response.id);
      this.tempAddPkm.push(response);
      if (this.tempAddPkm.length === this.quantityPkm) {
        this.addPkm = this.utils.getPkmOrder(this.tempAddPkm);
        if (this.addPkm.length > 1) {
          sessionStorage.setItem(
            'quantityPkm',
            JSON.stringify(this.addPkm.length)
          );
        }
      }
    });
  }

  private validateSkeleton() {
    for (let i = 0; i < this.quantityPkm; i++) {
      this.tempQuantityCards.push(i);
    }
  }

  private favoritesInList(id: number): boolean {
    const tempFavItems = localStorage.getItem('favorites');
    const favItems: IPkmPokemons[] = tempFavItems?JSON.parse(tempFavItems): [];
    const favListFind = favItems.find(item => item.id === id);
    return favListFind?true:false;
  }
}
