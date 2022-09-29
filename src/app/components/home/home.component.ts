import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentSession: {} = this.authService.getCurrentSession();
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
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    if (!this.currentSession) {
      this.authService.getAccount().subscribe(
        (response) => {
          this.authService.setCurrentSession(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
