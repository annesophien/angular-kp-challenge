import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../staff.service';
import { StaffType } from '../staff-type.model';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css']
})
export class StaffTableComponent implements OnInit {
	selectedRow: Number;
	display = 'none';
	staff: StaffType[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
		this.staff = this.staffService.getStaffs();
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
