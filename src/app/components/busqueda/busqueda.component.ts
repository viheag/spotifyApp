import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  cancionesEncontradas!: any;
  existe: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  busqueda(event: any): void {
    this.dataService.search(event.target.value).subscribe((response) => {
      setTimeout(() => {
        this.cancionesEncontradas = response.tracks.items;
        this.existe = true;
        console.log(this.cancionesEncontradas);
      }, 3000);
    });
  }
}
