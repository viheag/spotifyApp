import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { slideInAnimation } from './route-animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  currentUser!: any;
  stateSideBar: boolean = this.currentUser ? false : true; 
  
  constructor(private authService: AuthService) {
    this.authService.currentSession.subscribe((x) => {
      this.currentUser = x;
    }); 
  }
  onclickSideBar($event: boolean) {
    this.stateSideBar = $event; 
  }
}
