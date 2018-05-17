import { STAFF_DATA } from './data/dummy-data';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class StaffDataService {

	constructor() { }
	
	getStaff(): Observable<any[]> {
		return Observable.of(STAFF_DATA);
	}

	getColumns(): string[] {
		return ["description", "code", "role", "active", "modifiedBy", "modifiedDate"];
	}

}
