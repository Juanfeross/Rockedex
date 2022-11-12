import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RktLibComponent } from './rkt-lib.component';

describe('RktLibComponent', () => {
  let component: RktLibComponent;
  let fixture: ComponentFixture<RktLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RktLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RktLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
