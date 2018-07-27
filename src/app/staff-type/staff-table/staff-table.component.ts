import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { StaffService } from '../../staff.service';
import { StaffType } from '../staff-type.model';
import * as StaffTypeActions from '../store/staff-type.actions';
import * as fromStaffType from '../store/staff-type.reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css']
})
export class StaffTableComponent implements OnInit {
	staffState: Observable<{staffs: StaffType[]}>;	// staffState: StaffType[];
	columns: {description: string, title: string}[];

	staffType: StaffType; //staffType: StaffType = {description: '', code: 0, role: '', active: '', modifiedBy: '', modifiedDate: ''};
	selectedStaffType: StaffType;
	displayDialog: boolean;
	displayUpdateDialog: boolean;
	newStaffType: boolean;
	staffDisabled: boolean;
	
	constructor(private staffService: StaffService,
		private store: Store<fromStaffType.AppState>,
		private router: Router) { }

  ngOnInit() {
		this.staffState = this.store.select('staffState');	// this.staffState = this.staffService.getStaffs();
		this.columns = this.staffService.getColumns();
	}

	// ADD
	showDialogToAdd() {
		this.staffDisabled = true;
		this.newStaffType = true;
		this.staffType = {description: '', code: '', role: '', active: '', modifiedBy: '', modifiedDate: ''};
		this.displayDialog = true;
	}

	// EDIT
	onRowSelect(event) {
		this.staffDisabled = false;
		this.newStaffType = false;
		this.staffType = this.cloneStaffType(event.data);
		this.displayDialog = true;
	}

	cloneStaffType(s: StaffType): StaffType {
		let staffType = this.staffType = {description: '', code: '', role: '', active: '', modifiedBy: '', modifiedDate: ''};
		for (let item in s) {
			staffType[item] = s[item];
		}
		return staffType;
	}
	
	save() {
		if (this.newStaffType) {
			const newStaff = new StaffType(this.staffType.description, this.staffType.code, this.staffType.role, "Y", "SU123", (new Date).toTimeString());	//.toLocaleString());
			this.store.dispatch(new StaffTypeActions.AddStaff(newStaff));	
		} else {
			const newStaff = new StaffType(this.staffType.description, this.staffType.code, this.staffType.role, this.staffType.active, this.staffType.modifiedBy, (new Date).toTimeString());
			this.store.dispatch(new StaffTypeActions.EditStaff({staffType: newStaff}));
		}

		this.staffType = null;
		this.displayDialog = false;
	}

	activate() {

	}

	cancel() {
		this.displayDialog = false;
		this.displayUpdateDialog = false;
	}
}
