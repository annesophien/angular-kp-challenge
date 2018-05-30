import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { StaffType } from './staff-type.model';
import * as StaffTypeActions from './store/staff-type.actions';
import * as fromStaffType from './store/staff-type.reducers';

@Component({
  selector: 'app-staff-type',
  templateUrl: './staff-type.component.html',
  styleUrls: ['./staff-type.component.css']
})
export class StaffTypeComponent implements OnInit {
	staffState: Observable<{staffs: StaffType[]}>;

  constructor(
		private store: Store<fromStaffType.AppState>,	//store: Store<{staff: {staffs: StaffType[]}}>,
		private router: Router, 
		private route: ActivatedRoute) { }

  ngOnInit() {
		this.staffState = this.store.select('staffState');
	}
	
	onNewStaff() {
		this.router.navigate(['new'], {relativeTo: this.route});
	}
}
