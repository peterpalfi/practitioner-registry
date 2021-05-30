import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base/fb-base.service';
import { Practitioner } from 'src/app/shared/models/practitioner';

@Component({
  selector: 'app-data-add-edit',
  templateUrl: './data-add-edit.component.html',
  styleUrls: ['./data-add-edit.component.scss']
})
export class DataAddEditComponent {
  genderData = [
    {value: "male", name: "Male"},
    {value: "female", name: "Female"},
    {value: "other", name: "Other"},
    {value: "unknown", name: "Unknown"},
  ];
  selectedGender = "male";
  activeSelected = 'yes';

  practitionerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    active: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    birthDate: new FormControl(),
    telecom: new FormControl(),
    address: new FormControl(),
    qualification: new FormControl(),
  });

  constructor(private service: FbBaseService<Practitioner>, public dialogRef: MatDialogRef<DataAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveData() {
    
  }

}
