import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmSkeletonComponent } from './pkm-skeleton.component';

describe('PkmSkeletonComponent', () => {
  let component: PkmSkeletonComponent;
  let fixture: ComponentFixture<PkmSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
