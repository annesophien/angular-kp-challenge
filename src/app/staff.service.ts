import  { StaffType } from './staff-type/staff-type.model';

export class StaffService {
	staff: StaffType[] = [
		new StaffType('Test 1', 10001, 'AGENT', 'Y', 'A497', 'May 17, 2018 3:00:00 PM PDT'),
		new StaffType('Test 2', 10002, 'MD', 'Y', 'S603', 'May 1, 2018 01:00:00 AM PDT'),
		new StaffType('Tester', 10003, 'RN', 'N', 'R361', 'May 11, 2018 7:00:00 PM PDT'),
		new StaffType('Testee', 10004, 'AGENT', 'Y', 'L003', 'May 41, 2018 9:00:00 AM PDT'),
	];

	getStaffs() {
		return this.staff.slice();
	}

	getStaff(index: number) {
		return this.staff[index];
	}

	addStaff(description: string, code: number, role: string, active: string,
		modifiedBy: string) {
			this.staff.push({description: description, code: code, role: role, 
				active: active, modifiedBy: modifiedBy, modifiedDate: new Date().toDateString()});
	}

	updateStaff(id: number, description: string, role: string, modifiedBy: string) {
			this.staff[id].description = description;
			this.staff[id].role = role;
			this.staff[id].modifiedBy = modifiedBy;
			this.staff[id].modifiedDate = new Date().toDateString();
	}

	activateStaff(id: number, active, modifiedBy) {
		this.staff[id].active = active === 'Y' ? 'N' : 'Y';
		this.staff[id].modifiedBy = modifiedBy;
		this.staff[id].modifiedDate = new Date().toDateString();
	}
}