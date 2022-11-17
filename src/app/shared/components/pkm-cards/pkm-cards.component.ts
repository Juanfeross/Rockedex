import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pkm-interface/pkm-interface';
import { PkmFavoritesService } from '../../services/pkm-favorites/pkm-favorites.service';
import { utils } from '../../../../assets/utils/utils';

@Component({
  selector: 'app-pkm-cards',
  templateUrl: './pkm-cards.component.html',
  styleUrls: ['./pkm-cards.component.scss']
})
export class PkmCardsComponent implements OnInit {
  @Input() pkm?:IPokemon;

  constructor(private pkmFavoritesService: PkmFavoritesService) { }

  ngOnInit(): void {
  }

  public changeFavorites(event: boolean) {
    if (this.pkm) {
      this.pkmFavoritesService.changeFavorites(event, this.pkm);
    }
  }

  public addPkmStorage(pkm: IPokemon) {
    localStorage.setItem('pkmDetails', JSON.stringify(pkm));
  }
}

