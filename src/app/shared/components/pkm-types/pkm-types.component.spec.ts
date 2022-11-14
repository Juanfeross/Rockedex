import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmTypesComponent } from './pkm-types.component';

describe('PkmTypesComponent', () => {
  let component: PkmTypesComponent;
  let fixture: ComponentFixture<PkmTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
