import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
  canciones !:any[];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getToptracks().subscribe((response)=>{
      this.canciones=response.items;
      console.log(this.canciones);
    },(error)=>{
      console.log("Error",error)
    })
  }

}
