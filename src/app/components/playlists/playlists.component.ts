import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  playlists:any=[
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    },
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    },
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    },
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    },
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    },
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    },
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    },
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    },
    {
      name:'',
      external_urls:{
        spotify:''
      },
      images:[
       { url:''}
      ]
    }
  ]
  existe: boolean = false;
  currentSession: any = this.authService.getCurrentSession();
  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void { 
    this.dataService.getPlaylists(this.currentSession.id).subscribe(
      (response) => {
        setTimeout(() => {
          this.playlists = response.items; 
          console.log(this.playlists)
        }, 2000); 
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  cambiarInfo(term: any) {
    this.existe = false;
    this.dataService.getPlaylists(this.currentSession.id).subscribe(
      (response) => {
        this.playlists = response.items;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
