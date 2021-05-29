import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
