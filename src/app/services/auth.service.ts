import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginGoogle(): Observable<any> {
    return this.http.get<any>(
      `${environment.urlAPI}/login`
    );
  }
}
