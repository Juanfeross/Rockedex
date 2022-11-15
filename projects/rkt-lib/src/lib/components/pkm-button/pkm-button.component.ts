import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-pkm-button',
  templateUrl: './pkm-button.component.html',
  styleUrls: ['./pkm-button.component.css']
})
export class PkmButtonComponent implements OnInit {
@Input() pkmType: 'primary' | 'default' = 'default';
@Input() text: string = '';
@Output() buttonActions = new EventEmitter <boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public getAction() {
    this.buttonActions.emit(true);
  }
}
