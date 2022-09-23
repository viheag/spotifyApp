import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentSession:any=this.authService.getCurrentSession();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

}
