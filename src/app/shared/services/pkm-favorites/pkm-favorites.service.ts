import { EventEmitter, Injectable } from '@angular/core';
import { IPokemon } from '../../interfaces/pkm-interface/pkm-interface';
import { IPkmPokemons } from '../../interfaces/pkm-pokemons/pkm-pokemons';

@Injectable({
  providedIn: 'root'
})
export class PkmFavoritesService {
private onFavorites: EventEmitter <IPkmPokemons[]> = new EventEmitter <IPkmPokemons[]> ();

  constructor() { }

  public setFavorites(data: IPkmPokemons[]): void {
    this.onFavorites.emit(data);
  }

  get OnFavorites() {
    return this.onFavorites;
  }
}
