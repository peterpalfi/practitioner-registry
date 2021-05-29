import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base/fb-base.service';
import { Practitioner } from 'src/app/shared/models/practitioner';

@Component({
  selector: 'app-data-delete',
  templateUrl: './data-delete.component.html',
  styleUrls: ['./data-delete.component.scss']
})
export class DataDeleteComponent {

  constructor(private service: FbBaseService<Practitioner>, public dialogRef: MatDialogRef<DataDeleteComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteEntry() {
    //this.service.delete("Practitioners", "");
    this.dialogRef.close();
  }

}
