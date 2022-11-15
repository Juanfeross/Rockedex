import { Component, OnInit } from '@angular/core';
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
export class PkmFavoritesComponent implements OnInit {
public pokemonFavList: IPokemon[] = [];
private utils = new utils();

  constructor(private pkmFavoritesService: PkmFavoritesService, private pkmService: PkmService) { }

  ngOnInit(): void {
    this.pkmFavoritesService.OnFavorites.subscribe(
      favorites => {
        this.pokemonFavList = [];
        this.favorites(favorites);
      }
    )
    const favPokemons: IPokemon[] = JSON.parse(localStorage.getItem('favorites')?? '');
    if (favPokemons?.length > 0) {
      this.favorites(favPokemons);
    }

    // const pokemons: IPokemon[] = JSON.parse(sessionStorage.getItem('pokemons')?? '');
    // pokemons.forEach(pokemon => {
    //   favPokemons.forEach(favPokemon => {
    //     if (pokemon.id === favPokemon.id) {
    //       pokemon.isFavorite = true;
    //       this.pokemonFavList.push(pokemon);
    //     }
    //   });
    // });
    console.log(this.pokemonFavList);
  }

  private getPkmDetail(url: string = '') {
    this.pkmService.getPokemonId(url).subscribe(
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
