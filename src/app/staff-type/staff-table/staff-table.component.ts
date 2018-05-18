import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../staff.service';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css']
})
export class StaffTableComponent implements OnInit {
	selectedRow : Number;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
	}
	
	onEdit() {

	}

	setClickedRow(index) {
		this.selectedRow = index;
	}

}
