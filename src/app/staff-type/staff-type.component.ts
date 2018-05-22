import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { StaffType } from './staff-type.model';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-type',
  templateUrl: './staff-type.component.html',
  styleUrls: ['./staff-type.component.css']
})
export class StaffTypeComponent implements OnInit {

  constructor(private staffService: StaffService,
		private store: Store<{staff: {staffs: StaffType[]}}>, 
		private router: Router, 
		private route: ActivatedRoute) { }

  ngOnInit() {
	}
	
	onNewStaff() {
		// this.router.navigate(['new'], {relativeTo: this.route});
	}
}
