import { IPokemon } from "src/app/shared/interfaces/pkm-interface/pkm-interface";
import { IPkmPokemons } from '../../app/shared/interfaces/pkm-pokemons/pkm-pokemons';

export class utils {
  constructor() {

  }
  public getPkmOrder<T>(listPkm: any[]): T[] {
    const list = listPkm.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    return list;
  }
}
