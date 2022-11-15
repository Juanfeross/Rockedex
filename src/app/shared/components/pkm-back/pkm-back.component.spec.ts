import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmBackComponent } from './pkm-back.component';

describe('PkmBackComponent', () => {
  let component: PkmBackComponent;
  let fixture: ComponentFixture<PkmBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
