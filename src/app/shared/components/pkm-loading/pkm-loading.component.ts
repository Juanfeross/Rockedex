import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PkmLoadingService } from '../../services/pkm-loading/pkm-loading.service';

@Component({
  selector: 'app-pkm-loading',
  templateUrl: './pkm-loading.component.html',
  styleUrls: ['./pkm-loading.component.scss']
})
export class PkmLoadingComponent implements OnInit, OnDestroy {
private onDestroy$ = new Subject<boolean>();
public isViewLoading = false;

  constructor(private pkmLoadingService: PkmLoadingService) { }
  ngOnInit(): void {
    this.pkmLoadingService.OnLoading.pipe(takeUntil(this.onDestroy$)).subscribe(
      (loading) => {(this.isViewLoading = loading)
      console.log(loading)}
    );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
