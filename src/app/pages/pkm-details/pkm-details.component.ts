import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { PkmFavoritesService } from '../../shared/services/pkm-favorites/pkm-favorites.service';

@Component({
  selector: 'app-pkm-details',
  templateUrl: './pkm-details.component.html',
  styleUrls: ['./pkm-details.component.scss']
})
export class PkmDetailsComponent implements OnInit, OnDestroy {
public pkmDetails?: IPokemon;
public description: string = '';
public textButton: string = 'agregar a favoritos';
private onDestroy$ = new Subject<boolean>();

  constructor(private router: ActivatedRoute, private pkmService: PkmService, private pkmFavoritesService: PkmFavoritesService ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    const details = localStorage.getItem('pkmDetails');
    this.pkmDetails = details?JSON.parse(details): '';
    this.getSpecie(id);
    if (this.pkmDetails) {
      this.textButton = this.pkmFavoritesService.getFavoritesLoop(this.pkmDetails)?'eliminar de favoritos': 'agregar a favoritos';
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  private getSpecie(id: number) {
    this.pkmService.getPokemonSpecies(id).pipe(takeUntil(this.onDestroy$)).subscribe(
      response => {
        const specie = response;
        let pkmDescription = specie.flavor_text_entries.find(specie => specie.language.name === 'es');
        if (!pkmDescription) {
          pkmDescription = specie.flavor_text_entries.find(specie => specie.language.name === 'en');
        }
        this.description = pkmDescription?.flavor_text?? '';
      }
    )
  }

  public getFavoritesActButton() {
    if (this.pkmDetails) {
      this.pkmFavoritesService.changeFavorites(this.pkmDetails.isFavorite?? false, this.pkmDetails);
      this.textButton = this.pkmFavoritesService.getFavoritesLoop(this.pkmDetails)?'eliminar de favoritos': 'agregar a favoritos';
    }
  }
}
