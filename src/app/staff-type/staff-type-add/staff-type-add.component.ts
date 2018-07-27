import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-staff-type-add',
  templateUrl: './staff-type-add.component.html',
  styleUrls: ['./staff-type-add.component.css']
})
export class StaffTypeAddComponent implements OnInit {
	id: number;
	@Input() index: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.id = +params['id'];
				}
			)
  }
}
