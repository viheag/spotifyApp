import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlaylistComponent } from './card-playlist.component';

describe('CardPlaylistComponent', () => {
  let component: CardPlaylistComponent;
  let fixture: ComponentFixture<CardPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
