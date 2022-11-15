import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';

@Component({
  selector: 'app-pkm-details',
  templateUrl: './pkm-details.component.html',
  styleUrls: ['./pkm-details.component.scss']
})
export class PkmDetailsComponent implements OnInit {
public pkmDetails?: IPokemon;
public description: string = '';

  constructor(private router: ActivatedRoute, private pkmService: PkmService ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    const list: IPokemon[] = JSON.parse(sessionStorage.getItem('pokemons')?? '');
    this.pkmDetails = list.find(pkm => pkm.id === +id);
    sessionStorage.getItem('pokemons');
    this.getSpecie(id);
  }

  private getSpecie(id: number) {
    this.pkmService.getPokemonSpecies(id).subscribe(
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
}
