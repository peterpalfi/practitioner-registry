import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base/fb-base.service';
import { Practitioner } from 'src/app/shared/models/practitioner';
import { DataAddEditComponent } from '../data-add-edit/data-add-edit.component';
import { DataDeleteComponent } from '../data-delete/data-delete.component';
import * as faker from 'faker';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'gender', 'birthDate', 'contact', 'address', 'qualification', 'active', 'actions'];
  dataSource = new MatTableDataSource<any>();
  homeRoute = false;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private service: FbBaseService<Practitioner>, public dialog: MatDialog, private router: Router) {
    this.homeRoute = (this.router.url == "/home");
    if (this.homeRoute) this.displayedColumns.splice(-1,1);
  }

  ngAfterViewInit() {
    this.service.get("Practitioners").subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  openDeleteDialog(data: any) {
    const dialogRef = this.dialog.open(DataDeleteComponent, {
      width: '300px',
      data: data
    });
  }

  openAddDialog(data?: any) {
    let dialogRef;
    if (data === undefined) {
      dialogRef = this.dialog.open(DataAddEditComponent, {});
    } else {
      dialogRef = this.dialog.open(DataAddEditComponent, {data: data});
    }
  }

  createDummyPractitioner(): Practitioner {

    /* let name = new HumanName(this.practitionerForm.value.lastName, 
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
    let assignableQualification = Object.assign({}, qualification); */

    return new Practitioner(
      true,

    );
  }

  addDummyPractitioner() {
    console.log(faker.name.findName());
  }
}
