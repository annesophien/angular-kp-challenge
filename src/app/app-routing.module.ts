import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StaffTypeComponent } from "./staff-type/staff-type.component";
import { ContactCenterComponent } from "./contact-center/contact-center.component";
import { ComputerPhoneComponent } from "./computer-phone/computer-phone.component";
import { StaffTypeEditComponent } from "./staff-type/staff-type-edit/staff-type-edit.component";
import { StaffTypeAddComponent } from "./staff-type/staff-type-add/staff-type-add.component";

const appRoutes: Routes = [
	{ path: '', redirectTo: '/staff-type', pathMatch: 'full' },
	{ path: 'staff-type', component: StaffTypeComponent, children: [
		{ path: '', component: StaffTypeEditComponent },
		// { path: 'new', component: StaffTypeEditComponent },
		{ path: ':id/edit', component: StaffTypeAddComponent },
	] },
	{ path: 'staff-type/new', component: StaffTypeEditComponent },
	{ path: 'contact-centers', component: ContactCenterComponent },
	{ path: 'computer-phone', component: ComputerPhoneComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}