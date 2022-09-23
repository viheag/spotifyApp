import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  options: AnimationOptions = {
    path: '../../assets/animation.json',
  };
  ngOnInit(): void {}
}
