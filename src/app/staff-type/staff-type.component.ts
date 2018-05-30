import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { StaffType } from './staff-type.model';
import { StaffService } from '../staff.service';
import * as StaffTypeActions from './store/staff-type.actions';

@Component({
  selector: 'app-staff-type',
  templateUrl: './staff-type.component.html',
  styleUrls: ['./staff-type.component.css']
})
export class StaffTypeComponent implements OnInit {
	staffState: Observable<{staffs: StaffType[]}>;
	private subscription: Subscription;

  constructor(private staffService: StaffService,
		private store: Store<{staff: {staffs: StaffType[]}}>, 
		private router: Router, 
		private route: ActivatedRoute) { }

  ngOnInit() {
		this.staffState = this.store.select('staff');
	}
	
	onNewStaff() {
		// this.store.dispatch(new StaffTypeActions.AddStaff(this.staffState));
		this.router.navigate(['new'], {relativeTo: this.route});
	}
}
