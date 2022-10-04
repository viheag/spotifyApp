import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'; 

const sesionActual = 'SesionActual';
const authToken = 'authAccessToken';
const authRefresh = 'authRefreshToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localStorageService;
  

  private currentUserSubject: BehaviorSubject<any>;
  public currentSession: Observable<any>;
  constructor(private router: Router, private http: HttpClient) {
    this.localStorageService = localStorage;
    this.currentUserSubject = new BehaviorSubject<any>(this.loadSessionData());
    this.currentSession = this.currentUserSubject.asObservable();
  }

  //todos los datos de la sesion
  setCurrentSession(session: any): void {
    this.currentUserSubject.next(session);
    this.localStorageService.setItem(sesionActual, JSON.stringify(session));
    this.saveRefreshToken(session.refreshToken);
    this.saveToken(session.accessToken);
  }

  loadSessionData(): any {
    var sessionStr = this.localStorageService.getItem(sesionActual);
    return sessionStr ? <any>JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): any {
    return this.currentUserSubject.value;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem(sesionActual);
    /*this.localStorageService.removeItem('SesionActual')*/
    this.localStorageService.clear();
    this.currentUserSubject.next(null);
  }

  //save Roles
  getRoles(): any {
    var session: any = this.getCurrentSession();
    return session && session.user ? session.user.roles : null;
  }

  //obtener el usuario actual
  getCurrentUser(): any {
    var session: any = this.getCurrentSession();
    return session && session.user ? session.user : null;
  }

  getCurrentIdUser(): any {
    var session: any = this.getCurrentSession();
    return session && session.user ? session.user._id : null;
  }

  //comprobar si cuenta con un token para los interceptores
  isAuthenticated(): boolean {
    return this.getCurrentToken() != null ? true : false;
  }

  //Access token
  getCurrentToken(): any {
    return this.localStorageService.getItem(authToken);
  }

  saveToken(token: string): void {
    this.localStorageService.removeItem(authToken);
    this.localStorageService.setItem(authToken, token);
  }

  //Refresh token
  getRefreshToken(): string | null {
    return this.localStorageService.getItem(authRefresh);
  }

  saveRefreshToken(token: string): void {
    this.localStorageService.removeItem(authRefresh);
    this.localStorageService.setItem(authRefresh, token);
  }

  //get a new refreshToken
  refreshToken(token: string) {
    return this.http.post(
      `http://${environment.urlAPI}/api/auth/refreshtoken`,
      {
        refreshToken: token,
      }
    );
  }

  //Cerrar sesión
  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }
}
