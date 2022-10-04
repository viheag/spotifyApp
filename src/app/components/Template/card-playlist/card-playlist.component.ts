import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-playlist',
  templateUrl: './card-playlist.component.html',
  styleUrls: ['./card-playlist.component.scss']
})
export class CardPlaylistComponent implements OnInit {
  @Input() title = '';
  @Input() img = '';
  @Input() linkPlaylist = ''; 
  constructor() { }

  ngOnInit(): void { 
  }

}
