import * as StaffTypeActions from './staff-type.actions';
import { StaffType } from '../staff-type.model';

export interface AppState {
	staffState: State
}

export interface State {
	staffs: StaffType[];
	addedStaff: StaffType;
}

const initialState: State = {
	staffs: [
		new StaffType('Test 1', '10001', 'AGENT', 'Y', 'A497', 'May 17, 2018 3:00:00 PM PDT'),
		new StaffType('Test 2', '10002', 'MD', 'Y', 'S603', 'May 1, 2018 01:00:00 AM PDT'),
		new StaffType('Tester', '10003', 'RN', 'N', 'R361', 'May 11, 2018 7:00:00 PM PDT'),
		new StaffType('Testee', '10004', 'AGENT', 'Y', 'L003', 'May 4, 2018 9:00:00 AM PDT'),
	],
	addedStaff: null
};

export function staffTypeReducer(state = initialState, action: StaffTypeActions.StaffTypeActions) {
	switch (action.type) {
		case StaffTypeActions.ADD_STAFF:
			return {
				...state,
				staffs: [...state.staffs, action.payload]
			};
		case StaffTypeActions.EDIT_STAFF:
			// return {

			// };
		default:
			return state;
	}
}