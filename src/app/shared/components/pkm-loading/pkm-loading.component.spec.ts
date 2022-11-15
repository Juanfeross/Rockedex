import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmLoadingComponent } from './pkm-loading.component';

describe('PkmLoadingComponent', () => {
  let component: PkmLoadingComponent;
  let fixture: ComponentFixture<PkmLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
