import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmFavoritesComponent } from './pkm-favorites.component';

describe('PkmFavoritesComponent', () => {
  let component: PkmFavoritesComponent;
  let fixture: ComponentFixture<PkmFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
