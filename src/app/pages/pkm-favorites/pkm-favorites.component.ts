import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';

@Component({
  selector: 'app-pkm-favorites',
  templateUrl: './pkm-favorites.component.html',
  styleUrls: ['./pkm-favorites.component.scss']
})
export class PkmFavoritesComponent implements OnInit {
public pokemonFavList: IPokemon[] = [];

  constructor() { }

  ngOnInit(): void {
    const pokemons: IPokemon[] = JSON.parse(sessionStorage.getItem('pokemons')?? '');
    const favPokemons: IPokemon[] = JSON.parse(localStorage.getItem('favorites')?? '');
    pokemons.forEach(pokemon => {
      favPokemons.forEach(favPokemon => {
        if (pokemon.id === favPokemon.id) {
          this.pokemonFavList.push(pokemon);
        }
      });
    });
    console.log(this.pokemonFavList);
  }

  public refresh(): void {
    window.location.reload();
  }

}
