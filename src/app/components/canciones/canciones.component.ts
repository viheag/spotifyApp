import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss'],
})
export class CancionesComponent implements OnInit {
  canciones: any[]=['','','','','','','','','','','','','','','','','','','','',];
  existe: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getToptracks('short_term').subscribe(
      (response) => {
        setTimeout(() => {
          console.log('Listo');
          this.canciones = response.items;
          this.existe = true;
        }, 3000);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  cambiarInfo(term: any) {
    this.existe=false;
    this.authService.getToptracks(term).subscribe(
      (response) => {
        setTimeout(() => {
          console.log('Listo');
          this.canciones = response.items;
          this.existe = true;
        }, 3000);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
