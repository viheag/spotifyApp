import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsideComponent } from './components/Template/aside/aside.component';
import { HeaderComponent } from './components/Template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DashboardBlockComponent } from './components/Template/dashboard-block/dashboard-block.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { CardTrackComponent } from './components/Template/card-track/card-track.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonCardTracksComponent } from './components/Template/skeleton-card-tracks/skeleton-card-tracks.component';
import { CardPlaylistComponent } from './components/Template/card-playlist/card-playlist.component';
import { HttpRequestInterceptor } from './helpers/refresh-token.interceptor';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogArtistComponent } from './components/Template/dialog-artist/dialog-artist.component'; 
import {MatDialogModule } from '@angular/material/dialog';


export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    DashboardBlockComponent,
    ArtistasComponent,
    PlaylistsComponent,
    CancionesComponent,
    CardTrackComponent,
    SkeletonCardTracksComponent,
    CardPlaylistComponent,
    DialogArtistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
