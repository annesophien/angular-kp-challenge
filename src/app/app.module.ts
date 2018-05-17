import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StaffTypeComponent } from './staff-type/staff-type.component';
import { ComputerPhoneComponent } from './computer-phone/computer-phone.component';
import { ContactCenterComponent } from './contact-center/contact-center.component';


@NgModule({
  declarations: [
    AppComponent,
    StaffTypeComponent,
    ComputerPhoneComponent,
    ContactCenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
