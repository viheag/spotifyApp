import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentSession:any = this.authService.getCurrentSession();
  arrayBlocks = [
    {
      title: 'Artistas',
      description: 'Ve los artistas que más escuchas.',
      imagePath: './assets/images/artist.png',
      link: '/artistas',
    },
    {
      title: 'Playlist',
      description: 'Ve todas tus playlist.',
      imagePath: './assets/images/playlist.png',
      link: '/playlists',
    },
    {
      title: 'Canciones',
      description: 'Ve las canciones que más escuchas.',
      imagePath: './assets/images/song.png',
      link: '/canciones',
    },
  ];
  constructor(private dataService: DataService, private authService: AuthService) {}
  ngOnInit(): void {
    if (!this.currentSession) {
      this.dataService.getAccount().subscribe(
        (response) => {
          this.authService.setCurrentSession(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    console.log(this.currentSession.id)
  } 
  
}
