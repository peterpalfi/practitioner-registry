import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base/fb-base.service';
import { Address, ContactPoint, HumanName, Practitioner , BackboneElement, CodeableConcept} from 'src/app/shared/models/practitioner';

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
    birthDate: new FormControl(this.data?.birthDate == undefined || this.data?.birthDate == '' ? '' : new Date(this.data?.birthDate.toDate())),
    telecom: new FormControl(this.data?.telecom == undefined ? '' : this.data?.telecom[0].value),
    address: new FormControl(this.data?.address == undefined ? '' : this.data?.address[0].city),
    qualification: new FormControl(this.data?.qualification == undefined ? '' : this.data?.qualification[0].code.text),
  });

  constructor(private service: FbBaseService<Practitioner>, public dialogRef: MatDialogRef<DataAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveData(): void {
    let active = this.practitionerForm.value.active;

    let name = new HumanName(this.practitionerForm.value.lastName, 
      [this.practitionerForm.value.firstName]);
    let assignableName = Object.assign({}, name);

    let telecom = new ContactPoint(this.practitionerForm.value.telecom);
    let assignableTelecom = Object.assign({}, telecom);

    let address = new Address(this.practitionerForm.value.address);
    let assignableAddress = Object.assign({}, address);

    let gender = this.practitionerForm.value.gender;
    let birthDate = this.practitionerForm.value.birthDate;

    let qualificationCode = new CodeableConcept(this.practitionerForm.value.qualification);
    let assignableQualificationCode = Object.assign({}, qualificationCode);
    let qualification = new BackboneElement(assignableQualificationCode);
    let assignableQualification = Object.assign({}, qualification);

    let practitioner = new Practitioner(
      active, 
      [assignableName], 
      [assignableTelecom], 
      [assignableAddress], 
      gender, 
      birthDate,
      [assignableQualification] 
      );

    if (this.data == undefined) {
      this.service.add("Practitioners", Object.assign({}, practitioner));
    } else {
      this.service.update("Practitioners", this.data.id, Object.assign({}, practitioner));
    }
  }
}
