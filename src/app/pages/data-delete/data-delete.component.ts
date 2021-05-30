import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base/fb-base.service';
import { Practitioner } from 'src/app/shared/models/practitioner';

@Component({
  selector: 'app-data-delete',
  templateUrl: './data-delete.component.html',
  styleUrls: ['./data-delete.component.scss']
})
export class DataDeleteComponent {

  constructor(private service: FbBaseService<Practitioner>, public dialogRef: MatDialogRef<DataDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteEntry() {
    console.log(this.data.id);
    this.service.delete("Practitioners", this.data.id);
    this.dialogRef.close();
  }

}
