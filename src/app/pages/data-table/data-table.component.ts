import { Component, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
  displayedColumns = ['active', 'edit', 'delete'];
  //'Contact', 'Address', 'Gender', 'Birth Date', 'Qualification', 'Spoken Language'
  dataSource = new MatTableDataSource<any>();

  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.afs.collection<any>('Practitioners').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
 
  openDialog(_data: any): void {
    //const dialogRef = this.dialog.open(EditDia)
  }

  addPractitioner() {

  }

  trackByUid(index: any, item: any) {
    return item.uid;
  }

}
