import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmSearchComponent } from './pkm-search.component';

describe('PkmSearchComponent', () => {
  let component: PkmSearchComponent;
  let fixture: ComponentFixture<PkmSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
