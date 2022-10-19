import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getAccount(): Observable<any> {
    return this.http.get<any>(`${environment.urlAPI}/account`, {
      withCredentials: true,
    });
  }
  getToptracks(term: any): Observable<any> {
    return this.http.get<any>(`${environment.urlAPI}/getTopTracks`, {
      withCredentials: true,
      params: {
        type_term: term,
      },
    });
  }
  getPlaylists(userId: any): Observable<any> {
    return this.http.get<any>(`${environment.urlAPI}/getPlaylists`, {
      withCredentials: true,
      params: {
        userId: userId,
      },
    });
  }
  getFollowedArtists(): Observable<any> {
    return this.http.get<any>(`${environment.urlAPI}/getFollowedArtists`, {
      withCredentials: true,
    });
  }
  getInfoArtist(idArtist: any): Observable<any> {
    return this.http.get<any>(`${environment.urlAPI}/getInfoArtist`, {
      withCredentials: true,
      params: { artist: idArtist }
    });
  }
  search(busqueda:any): Observable<any>{
    return this.http.get<any>(`${environment.urlAPI}/search`,{
      withCredentials:true,
      params:{
        busqueda:busqueda
      }
    })
  }
}
