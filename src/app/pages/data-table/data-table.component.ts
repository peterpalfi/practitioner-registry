import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FbBaseService } from 'src/app/services/fb-base/fb-base.service';
import { Practitioner } from 'src/app/shared/models/practitioner';
import { DataAddEditComponent } from '../data-add-edit/data-add-edit.component';
import { DataDeleteComponent } from '../data-delete/data-delete.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
  displayedColumns = ['name', 'contact', 'active', 'actions'];
  //'Contact', 'Address', 'Gender', 'Birth Date', 'Qualification', 'Spoken Language'
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private service: FbBaseService<Practitioner>, public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.service.get("Practitioners").subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  openEditDialog(data: any) {
    const dialogRef = this.dialog.open(DataAddEditComponent, {
      width: '200px',
      data: data
    });
  }

  openDeleteDialog(data: any) {
    const dialogRef = this.dialog.open(DataDeleteComponent, {
      width: '300px',
      data: data
    });
  }

  addPractitioner() {
  }

  trackByUid(index: any, item: any) {
    return item.uid;
  }

}
