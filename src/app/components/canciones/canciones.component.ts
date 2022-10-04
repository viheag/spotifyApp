import { Component, OnInit } from '@angular/core'; 
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss'],
})
export class CancionesComponent implements OnInit {
  canciones: any[]=['','','','','','','','','','','','','','','','','','','','',];
  existe: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getToptracks('short_term').subscribe(
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
    this.dataService.getToptracks(term).subscribe(
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
