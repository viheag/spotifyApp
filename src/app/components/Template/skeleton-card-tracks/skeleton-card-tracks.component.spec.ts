import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCardTracksComponent } from './skeleton-card-tracks.component';

describe('SkeletonCardTracksComponent', () => {
  let component: SkeletonCardTracksComponent;
  let fixture: ComponentFixture<SkeletonCardTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonCardTracksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonCardTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
