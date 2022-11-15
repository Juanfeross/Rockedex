import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PkmLoadingService {
  private onLoading: EventEmitter <boolean> = new EventEmitter <boolean> ();

  constructor() { }

    public loading(data: boolean): void {
      this.onLoading.emit(data);
    }

    get OnLoading() {
      return this.onLoading;
    }
  }
