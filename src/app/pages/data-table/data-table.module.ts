import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DataAddEditComponent } from '../data-add-edit/data-add-edit.component';
import { DataDeleteComponent } from '../data-delete/data-delete.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    DataTableComponent,
    DataAddEditComponent,
    DataDeleteComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSortModule
  ],
  exports: [
    DataTableComponent,
    DataAddEditComponent,
    DataDeleteComponent
  ],
  entryComponents: [
    DataAddEditComponent,
    DataDeleteComponent
  ]
})
export class DataTableModule { }
