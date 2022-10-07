import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const sesionActual = 'SesionActual'; 

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
    this.localStorageService.clear();
    this.currentUserSubject.next(null);
  }
  //obtener el usuario actual
  getCurrentUser(): any {
    var session: any = this.getCurrentSession();
    return session && session.user ? session.user : null;
  }

  getNewRefreshToken(): Observable<any> {
    return this.http.get<any>(`${environment.urlAPI}/refresh_token`, {
      withCredentials: true,
    });
  }

  logoutBackEnd():Observable<any>{
    return this.http.get<any>(`${environment.urlAPI}/logout`, {
      withCredentials: true,
    });
  }
  //Cerrar sesión
  logout(): void {
    this.removeCurrentSession();
    this.logoutBackEnd().subscribe((response)=>{
      console.log(response)
    });
    this.router.navigate(['/login']);
  }
}
