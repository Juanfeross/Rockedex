import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPokemon } from '../../interfaces/pkm-interface/pkm-interface';
import { IPokemonResults } from '../../interfaces/pkm-results/pkm-results';

@Injectable({
  providedIn: 'root'
})
export class PkmService {

  constructor(private http: HttpClient) {}

  public getPokemon(url: string = 'pokemon', page: number = 980):Observable <IPokemonResults<IPokemon[]>> {
    const path = environment.baseUrlAPI + url + '?limit=12';
    return this.http.get<IPokemonResults<IPokemon[]>>(path);
  }

  public getPokemonId(url: string = '', isPath = true):Observable <IPokemon> {
    const path = isPath ? environment.baseUrlAPI + url:url;
    return this.http.get<IPokemon>(path);
  }
}
