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
    active: new FormControl(this.data?.active),
    firstName: new FormControl(this.data?.name[0].given[0]),
    lastName: new FormControl(this.data?.name[0].family),
    gender: new FormControl(this.data?.gender),
    birthDate: new FormControl(this.data?.birthDate),
    telecom: new FormControl(this.data?.telecom == undefined ? '' : this.data?.telecom[0].text),
    address: new FormControl(this.data?.address == undefined ? '' : this.data?.address[0].city),
    qualification: new FormControl(this.data?.qualification == undefined ? '' : this.data?.qualification[0].code.text),
  });

  constructor(private service: FbBaseService<Practitioner>, public dialogRef: MatDialogRef<DataAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveData(): void {
    console.log(this.data);
  }

}
