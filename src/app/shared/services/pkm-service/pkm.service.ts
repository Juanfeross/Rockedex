import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPokemon } from '../../interfaces/pkm-interface/pkm-interface';
import { IPokemonResults } from '../../interfaces/pkm-results/pkm-results';
import { IPkmSpecie } from '../../interfaces/pkm-specie/pkm-specie';

@Injectable({
  providedIn: 'root'
})
export class PkmService {

  constructor(private http: HttpClient) {}

  public getPokemon(limit: number = 12,  page: number = 0, url: string = 'pokemon'):Observable <IPokemonResults<IPokemon[]>> {
    const path = environment.baseUrlAPI + url + '?limit=' + limit + '&offset=' + page;
    return this.http.get<IPokemonResults<IPokemon[]>>(path);
  }

  public getPokemonId(url: string = '', isPath = true):Observable <IPokemon> {
    const path = isPath ? environment.baseUrlAPI + url:url;
    return this.http.get<IPokemon>(path);
  }

  public getPokemonSpecies(id: number):Observable <IPkmSpecie> {
    const path = environment.baseUrlAPI + 'pokemon-species/' + id;
    return this.http.get<IPkmSpecie>(path);
  }
}
