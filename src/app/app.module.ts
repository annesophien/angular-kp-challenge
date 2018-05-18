import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StaffTypeComponent } from './staff-type/staff-type.component';
import { ComputerPhoneComponent } from './computer-phone/computer-phone.component';
import { ContactCenterComponent } from './contact-center/contact-center.component';
import { HeaderComponent } from './header/header.component';
import { StaffTableComponent } from './staff-type/staff-table/staff-table.component';
import { StaffRowComponent } from './staff-type/staff-table/staff-row/staff-row.component';
import { StaffService } from './staff.service';

@NgModule({
  declarations: [
    AppComponent,
    StaffTypeComponent,
    ComputerPhoneComponent,
    ContactCenterComponent,
    HeaderComponent,
    StaffTableComponent,
    StaffRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
