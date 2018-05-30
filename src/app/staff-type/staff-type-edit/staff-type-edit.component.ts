import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { StaffType } from '../staff-type.model';
import * as StaffTypeActions from '../store/staff-type.actions';
import * as fromStaffType from '../store/staff-type.reducers';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-staff-type-edit',
  templateUrl: './staff-type-edit.component.html',
  styleUrls: ['./staff-type-edit.component.css']
})
export class StaffTypeEditComponent implements OnInit {
	@ViewChild('f') staffTypeForm: NgForm;
	subscription: Subscription;
	addedStaff: StaffType;

  constructor(private store: Store<fromStaffType.AppState>) { }

  ngOnInit() {
		this.subscription = this.store.select('staffState')
			.subscribe(
				data => {
					this.addedStaff = data.addedStaff;
					this.staffTypeForm.setValue({
						description: this.addedStaff.description,
						code: this.addedStaff.code,
						role: this.addedStaff.role,
						active: this.addedStaff.active
					})
				}
			)
	}
	
	onSubmit(form: NgForm) {
		const value = form.value;
		const newStaff = new StaffType(value.description, value.code, value.role, value.active, "", Date.toString())
		this.store.dispatch(new StaffTypeActions.AddStaff(newStaff));
	}

}
