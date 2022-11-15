import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmDetailsComponent } from './pkm-details.component';

describe('PkmDetailsComponent', () => {
  let component: PkmDetailsComponent;
  let fixture: ComponentFixture<PkmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
