import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog'
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { StaffTypeComponent } from './staff-type/staff-type.component';
import { ComputerPhoneComponent } from './computer-phone/computer-phone.component';
import { ContactCenterComponent } from './contact-center/contact-center.component';
import { HeaderComponent } from './header/header.component';
import { StaffTableComponent } from './staff-type/staff-table/staff-table.component';
import { StaffRowComponent } from './staff-type/staff-table/staff-row/staff-row.component';
import { StaffService } from './staff.service';
import { staffTypeReducer } from './staff-type/store/staff-type.reducers';
import { AppRoutingModule } from './app-routing.module';
import { StaffTypeEditComponent } from './staff-type/staff-type-edit/staff-type-edit.component';
import { StaffTypeAddComponent } from './staff-type/staff-type-add/staff-type-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffTypeComponent,
    ComputerPhoneComponent,
		ContactCenterComponent,
		// DropdownModule,
		HeaderComponent,
		// InputTextModule,
    StaffTableComponent,
		StaffRowComponent,
		StaffTypeEditComponent,
		StaffTypeAddComponent,
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		DropdownModule,
		FormsModule,
		ButtonModule,
		DialogModule,
		TableModule,
		StoreModule.forRoot({staffState: staffTypeReducer})
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
