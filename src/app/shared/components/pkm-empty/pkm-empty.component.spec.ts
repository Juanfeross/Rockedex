import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmEmptyComponent } from './pkm-empty.component';

describe('PkmEmptyComponent', () => {
  let component: PkmEmptyComponent;
  let fixture: ComponentFixture<PkmEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
