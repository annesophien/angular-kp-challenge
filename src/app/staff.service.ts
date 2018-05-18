
export class StaffService {
	staff = [
		{
			description: 'Test 1',
			code: 10001,
			role: 'AGENT',
			active: 'N',
			modifiedBy: 'SU',
			modifiedDate: new Date() //'May 17, 2018 3:00:00 PM PDT'
		},
		{
			description: 'Test 2',
			code: 10002,
			role: 'MD',
			active: 'Y',
			modifiedBy: 'S603',
			modifiedDate: 'May 1, 2018 01:00:00 AM PDT'
		},
		{
			description: 'Tester',
			code: 10003,
			role: 'RN',
			active: 'Y',
			modifiedBy: 'R363',
			modifiedDate: 'May 11, 2018 7:00:00 PM PDT'
		},
		{
			description: 'Testee',
			code: 10004,
			role: 'AGENT',
			active: 'Y',
			modifiedBy: 'L003',
			modifiedDate: 'May 41, 2018 9:00:00 AM PDT'
		},
	];

	addStaff(description: string, code: number, role: string, active: string,
		modifiedBy: string) {
			this.staff.push({description: description, code: code, role: role, 
				active: active, modifiedBy: modifiedBy, modifiedDate: new Date()});
	}

	updateStaff(id: number, description: string, role: string, modifiedBy: string) {
			this.staff[id].description = description;
			this.staff[id].role = role;
			this.staff[id].modifiedBy = modifiedBy;
			this.staff[id].modifiedDate = new Date();
	}

	activateStaff(id: number, active, modifiedBy) {
		this.staff[id].active = active === 'Y' ? 'N' : 'Y';
		this.staff[id].modifiedBy = modifiedBy;
		this.staff[id].modifiedDate = new Date();
	}
}