import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'; 
import {MatSort} from '@angular/material/sort';
import {
  MatDialog
} from '@angular/material/dialog';
import { DialogArtistComponent } from '../Template/dialog-artist/dialog-artist.component';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss'],
})
export class ArtistasComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  playlist!: Array<any>;
  displayedColumns: string[] = ['name', 'popularity', 'genres', 'followers'];
  constructor(private dataService: DataService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataService.getFollowedArtists().subscribe(
      (response) => {
        this.playlist = response.artists.items;
        this.dataSource = new MatTableDataSource<any>(this.playlist);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  abrirDialog(idArtist:any) { 
    const dialogRef = this.dialog.open(DialogArtistComponent, {
      data: {
        idArtist: idArtist.id,
        buttonText: {
          cancel: 'Done',
        },
      },
    });
  }
}
