import { EventEmitter, Injectable } from '@angular/core';
import { utils } from 'src/assets/utils/utils';
import { IPokemon } from '../../interfaces/pkm-interface/pkm-interface';
import { IPkmPokemons } from '../../interfaces/pkm-pokemons/pkm-pokemons';

@Injectable({
  providedIn: 'root'
})
export class PkmFavoritesService {
  private onFavorites: EventEmitter <IPkmPokemons[]> = new EventEmitter <IPkmPokemons[]> ();
  private utils = new utils();

  constructor() { }

  public setFavorites(data: IPkmPokemons[]): void {
    this.onFavorites.emit(data);
  }

  get OnFavorites() {
    return this.onFavorites;
  }

  public changeFavorites(event: boolean, pkm: IPokemon): IPokemon[] {
    const favorites = this.getFavs();
    const isPkmFounded = this.getFavoriteId(favorites, pkm);
    if (pkm && !isPkmFounded) {
      favorites.push({id: pkm.id, name:pkm.name});
    }
    const tempListPokemon: IPokemon[] = this.utils.getPkmOrder(favorites);
    this.setFavorites(tempListPokemon);
    localStorage.setItem('favorites', JSON.stringify(tempListPokemon));
    return tempListPokemon;
  }

  public getFavoritesLoop(pkm: IPokemon): boolean {
    const favorites = this.getFavs();
    let isFavorite = false;
    favorites.forEach((element) => {
      if (element.id === pkm.id) {
        isFavorite = true;
      }
    })
    return isFavorite;
  }

  private getFavs(): IPkmPokemons[] {
    const localSave = localStorage.getItem('favorites')?? '';
    const favorites: IPkmPokemons[] = localSave?JSON.parse(localSave): [];
    return favorites;
  }

  private getFavoriteId(favorites: IPkmPokemons[], pkm: IPokemon): boolean {
    let pkmPosition = -1;
    favorites.forEach((element, index) => {
      if (element.id == pkm?.id) {
        pkmPosition = index;
      }
    });
    if (pkmPosition !== -1) {
      favorites.splice(pkmPosition, 1);
    }
    return pkmPosition !== -1;
  }

  public pkmFound(favorites: IPkmPokemons[], pkm: IPokemon) {

  }
}
