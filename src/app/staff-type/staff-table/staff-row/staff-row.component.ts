import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StaffService } from '../../../staff.service';
import { StaffType } from '../../staff-type.model';

@Component({
  selector: 'app-staff-row',
  templateUrl: './staff-row.component.html',
  styleUrls: ['./staff-row.component.css']
})
export class StaffRowComponent implements OnInit {
	@Input() staff: StaffType;
	@Input() columns: string[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
	}
}
