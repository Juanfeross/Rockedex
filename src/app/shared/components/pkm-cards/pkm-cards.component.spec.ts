import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmCardsComponent } from './pkm-cards.component';

describe('PkmCardsComponent', () => {
  let component: PkmCardsComponent;
  let fixture: ComponentFixture<PkmCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
