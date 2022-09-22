import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    if(!this.authService.getCurrentSession()){
    this.authService.getAccount().subscribe(
      (response) => {
        this.authService.setCurrentSession(response);
         
      },
      (error) => {
        console.log(error);
      }
    );
  }}
}
