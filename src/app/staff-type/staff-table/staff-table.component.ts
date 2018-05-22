import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { StaffService } from '../../staff.service';
import { StaffType } from '../staff-type.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css']
})
export class StaffTableComponent implements OnInit {
	staffState: Observable<{staffs: StaffType[]}>;
	columns: {description: string, title: string}[];
	selectedRow: Number;
	display = 'none';

	constructor(private staffService: StaffService,
		private store: Store<{staffType: {staffs: StaffType[]}}>) { }

  ngOnInit() {
		this.staffState = this.store.select('staffType');	// this.staffs = this.staffService.getStaffs();
		this.columns = this.staffService.getColumns();
	}
	
	setClickedRow(index) {
		this.selectedRow = index;
	}

	closeModal() {
		this.display = 'none';
	}

	openModal() {
		this.display = 'block';
	}
	
	deactivateStaff() {

	}

	updateStaff() {

	}
}
