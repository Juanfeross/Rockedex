import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pkm-interface/pkm-interface';

@Component({
  selector: 'app-pkm-cards',
  templateUrl: './pkm-cards.component.html',
  styleUrls: ['./pkm-cards.component.scss']
})
export class PkmCardsComponent implements OnInit {
@Input() pkm?:IPokemon;
private pkmFavorites: IPokemon[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public changeFavorites(event: boolean) {
    const localSave = localStorage.getItem('favorites')?? ''
    const favorites: IPokemon[] = localSave?JSON.parse(localSave): [];
    this.pkmFavorites = favorites;
    if (this.pkm) {
      this.pkmFavorites.push(this.pkm);
    }
    localStorage.setItem('favorites', JSON.stringify(this.pkmFavorites));
    console.log(this.pkmFavorites);
  }

  private getFavoriteId(id: number) {
    this.pkmFavorites.forEach((element, index) => {
      if (element.id == id) {
        console.log(element);
      }
    });
  }
}

