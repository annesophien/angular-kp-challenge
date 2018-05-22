import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

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

@NgModule({
  declarations: [
    AppComponent,
    StaffTypeComponent,
    ComputerPhoneComponent,
    ContactCenterComponent,
    HeaderComponent,
    StaffTableComponent,
		StaffRowComponent,
		StaffTypeEditComponent,
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({staffType: staffTypeReducer})
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
