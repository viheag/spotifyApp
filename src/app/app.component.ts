import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUser!: any;
  stateSideBar: boolean = this.currentUser ? false : true; 
  
  constructor(private authService: AuthService) {
    this.authService.currentSession.subscribe((x) => {
      this.currentUser = x;
    });
    console.log(this.stateSideBar);
  }
  onclickSideBar($event: boolean) {
    this.stateSideBar = $event; 
  }
}
