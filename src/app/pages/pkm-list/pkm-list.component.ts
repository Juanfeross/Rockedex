import { Component, OnInit } from '@angular/core';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';

@Component({
  selector: 'app-pkm-list',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.scss']
})
export class PkmListComponent implements OnInit {
public addPkm: IPokemon[] = [];
public tempAddPkm: IPokemon[] = [];

  constructor(private pkmService: PkmService) { }

  ngOnInit(): void {
    this.pkmService.getPokemon().subscribe(
      response => {
        response.results.forEach(element => {
          this.getPkmDetail(element.url);
          console.log(this.getPkmOrder());
        });
      }
    )
  }

  public addLeadingZeros(num: number, totalLength: number) {
    return String(num).padStart(totalLength, '0');
  }

  public firstLetterUpperCase(name: string) {
    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return nameUpper;
  }

  private getPkmDetail(url: string = '') {
    this.pkmService.getPokemonId(url, false).subscribe(
      response => {
        this.tempAddPkm.push(response);
        this.addPkm = this.getPkmOrder();
      }
    )
  }

  private getPkmOrder(): IPokemon[] {
    const list = this.tempAddPkm.sort(function (a, b) {
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
