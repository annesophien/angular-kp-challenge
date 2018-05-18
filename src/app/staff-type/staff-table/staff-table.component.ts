import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../staff.service';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css']
})
export class StaffTableComponent implements OnInit {
	selectedRow: Number;
	display = 'none';

  constructor(private staffService: StaffService) { }

  ngOnInit() {
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
