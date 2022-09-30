import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-track',
  templateUrl: './card-track.component.html',
  styleUrls: ['./card-track.component.scss']
})
export class CardTrackComponent implements OnInit {
  @Input() title = '';
  @Input() img = '';
  @Input() linkSong = '';
  @Input() artists = '';
  constructor() { }

  ngOnInit(): void {  
  }

}
