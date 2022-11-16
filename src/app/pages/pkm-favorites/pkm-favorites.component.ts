import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PkmFavoritesService } from 'src/app/shared/services/pkm-favorites/pkm-favorites.service';
import { PkmService } from 'src/app/shared/services/pkm-service/pkm.service';
import { utils } from 'src/assets/utils/utils';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';
import { IPkmPokemons } from '../../shared/interfaces/pkm-pokemons/pkm-pokemons';

@Component({
  selector: 'app-pkm-favorites',
  templateUrl: './pkm-favorites.component.html',
  styleUrls: ['./pkm-favorites.component.scss']
})
export class PkmFavoritesComponent implements OnInit, OnDestroy {
public pokemonFavList: IPokemon[] = [];
private utils = new utils();
private onDestroy$ = new Subject<boolean>();

  constructor(private pkmFavoritesService: PkmFavoritesService, private pkmService: PkmService) { }

  ngOnInit(): void {
    this.pkmFavoritesService.OnFavorites.subscribe(
      favorites => {
        this.pokemonFavList = [];
        this.favorites(favorites);
      }
    )
    const tempFavPokemons = localStorage.getItem('favorites');
    const favPokemons: IPokemon[] = tempFavPokemons?JSON.parse(tempFavPokemons): [];
    if (favPokemons?.length > 0) {
      this.favorites(favPokemons);
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  private getPkmDetail(url: string = '') {
    this.pkmService.getPokemonId(url).pipe(takeUntil(this.onDestroy$)).subscribe(
      response => {
        response.isFavorite = true;
        this.pokemonFavList.push(response);
        this.pokemonFavList = this.utils.getPkmOrder(this.pokemonFavList);
      }
    )
  }

  private favorites(favorites: IPkmPokemons[]) {
    favorites.forEach(favorite => {
      this.getPkmDetail('pokemon/' + favorite.id);
    });
  }
}
