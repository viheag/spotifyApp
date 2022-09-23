import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentSession:{}=this.authService.getCurrentSession();
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
    }else{
      console.log(this.currentSession)
    }
  }
}
