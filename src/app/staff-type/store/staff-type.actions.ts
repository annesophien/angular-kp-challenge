import { Action } from '@ngrx/store';

import { StaffType } from '../staff-type.model';
export const ADD_STAFF = 'ADD_STAFF';

export class AddStaff implements Action {
	readonly type = ADD_STAFF;
	payload: StaffType;
}

export type StaffTypeActions = AddStaff;