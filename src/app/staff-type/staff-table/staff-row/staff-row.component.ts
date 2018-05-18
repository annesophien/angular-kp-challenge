import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../staff.service';

@Component({
  selector: 'app-staff-row',
  templateUrl: './staff-row.component.html',
  styleUrls: ['./staff-row.component.css']
})
export class StaffRowComponent implements OnInit {

  constructor(private staffService: StaffService) { }

  ngOnInit() {
  }

}
