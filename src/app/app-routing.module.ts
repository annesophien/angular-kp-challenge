import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StaffTypeComponent } from "./staff-type/staff-type.component";
import { ContactCenterComponent } from "./contact-center/contact-center.component";
import { ComputerPhoneComponent } from "./computer-phone/computer-phone.component";
import { StaffTypeEditComponent } from "./staff-type/staff-type-edit/staff-type-edit.component";

const appRoutes: Routes = [
	{ path: '', redirectTo: '/staff-type', pathMatch: 'full' },
	{ path: 'staff-type', component: StaffTypeComponent, children: [
		{ path: 'new', component: StaffTypeEditComponent },
		{ path: ':id/edit', component: StaffTypeEditComponent },
	] },
	{ path: 'contact-centers', component: ContactCenterComponent },
	{ path: 'computer-phone', component: ComputerPhoneComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}