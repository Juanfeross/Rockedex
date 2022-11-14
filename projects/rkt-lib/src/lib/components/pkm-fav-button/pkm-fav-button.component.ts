import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-pkm-fav-button',
  templateUrl: './pkm-fav-button.component.html',
  styleUrls: ['./pkm-fav-button.component.css']
})
export class PkmFavButtonComponent implements OnInit {
@Input() checked: boolean = false;
@Input() checkIcon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
