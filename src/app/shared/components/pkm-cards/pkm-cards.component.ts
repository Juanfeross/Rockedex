import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pkm-interface/pkm-interface';

@Component({
  selector: 'app-pkm-cards',
  templateUrl: './pkm-cards.component.html',
  styleUrls: ['./pkm-cards.component.scss']
})
export class PkmCardsComponent implements OnInit {
@Input() pkm?:IPokemon;
private pkmFavorites: {id: number, name: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public changeFavorites(event: boolean) {
    const localSave = localStorage.getItem('favorites')?? ''
    const favorites: IPokemon[] = localSave?JSON.parse(localSave): [];
    this.pkmFavorites = favorites;
    const isPkmFounded = this.getFavoriteId();
    if (this.pkm && !isPkmFounded) {
      this.pkmFavorites.push({id: this.pkm.id, name:this.pkm.name});
    }
    localStorage.setItem('favorites', JSON.stringify(this.pkmFavorites));
    console.log(this.pkmFavorites);
  }

  private getFavoriteId(): boolean {
    let pkmPosition = -1;
    this.pkmFavorites.forEach((element, index) => {
      if (element.id == this.pkm?.id) {
        pkmPosition = index;
        console.log(element);
      }
    });
    if (pkmPosition !== -1) {
      this.pkmFavorites.splice(pkmPosition, 1);
    }
    return pkmPosition !== -1;
  }
}

