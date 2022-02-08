import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input/input-module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTable } from '@angular/material/table/table';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AdminNavComponent,
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
})
export class AdminModule { }
