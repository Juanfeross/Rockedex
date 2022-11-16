import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/shared/interfaces/pkm-interface/pkm-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getFavoritesLength();
  }

  public getFavoritesLength(): IPokemon[] {
    const favorites = localStorage.getItem('favorites');
    const favPokemons: IPokemon[] = favorites?JSON.parse(favorites): [];
    return favPokemons;
  }
}
