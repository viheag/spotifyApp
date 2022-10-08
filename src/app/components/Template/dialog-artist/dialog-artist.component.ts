import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dialog-artist',
  templateUrl: './dialog-artist.component.html',
  styleUrls: ['./dialog-artist.component.scss'],
})
export class DialogArtistComponent {
  idArtist: string = '';
  datosArtista: object = {}; 
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogArtistComponent>,
    private dataService: DataService
  ) {
    if (data) {
      this.idArtist = data.idArtist;
      this.dataService.getInfoArtist(this.idArtist).subscribe((response) => {
        this.datosArtista = response;
      });
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
