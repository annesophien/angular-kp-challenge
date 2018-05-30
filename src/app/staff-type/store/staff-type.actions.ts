import { Action } from '@ngrx/store';

import { StaffType } from '../staff-type.model';

export const ADD_STAFF = 'ADD_STAFF';
// export const START_ADD = 'START_ADD';
// export const STOP_ADD = 'STOP_ADD';

export class AddStaff implements Action {
	readonly type = ADD_STAFF;
	
	constructor(public payload: StaffType) { }
}

// export class StartAdd implements Action {
// 	readonly type = START_ADD;

// 	constructor(public payload: number) { }
// }

// export class StopAdd implements Action {
// 	readonly type = STOP_ADD;
// }

export type StaffTypeActions = AddStaff;	// | StartAdd | StopAdd;