import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'artistas',
    component: ArtistasComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'canciones',
    component: CancionesComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
    data: {animation: 'Home'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
