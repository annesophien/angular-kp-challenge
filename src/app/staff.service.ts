import  { StaffType } from './staff-type/staff-type.model';

export class StaffService {
	staff: StaffType[] = [
		new StaffType('Test 1', '10001', 'AGENT', 'Y', 'A497', 'May 17, 2018 3:00:00 PM PDT'),
		new StaffType('Test 2', '10002', 'MD', 'Y', 'S603', 'May 1, 2018 01:00:00 AM PDT'),
		new StaffType('Tester', '10003', 'RN', 'N', 'R361', 'May 11, 2018 7:00:00 PM PDT'),
		new StaffType('Testee', '10004', 'AGENT', 'Y', 'L003', 'May 4, 2018 9:00:00 AM PDT'),
	];

	getStaffs() {
		return this.staff.slice();
	}

	getColumns() {
		return [{"description": "description", "title": "Description"},
			{"description": "code", "title": "Code"},
			{"description": "role", "title": "Role"},
			{"description": "active", "title": "Active?"},
			{"description": "modifiedBy", "title": "Modified By"},
			{"description": "modifiedDate", "title": "Modified Date"}];
	}

	getStaff(index: number) {
		return this.staff[index];
	}

	addStaff(staff: StaffType) {
		staff.modifiedDate = new Date().toDateString();
		this.staff.push(staff);
	}

	updateStaff(id: number, staff: StaffType) {
		staff.modifiedDate = new Date().toDateString();
		this.staff[id] = staff;
	}

	activateStaff(id: number) {
		this.staff[id].active === 'Y' ? 'N' : 'Y';
		this.staff[id].modifiedDate = new Date().toDateString();
	}
}