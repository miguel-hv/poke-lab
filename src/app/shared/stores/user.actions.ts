import { createAction, props } from "@ngrx/store";
import { UserState } from "../../models/UserState.model";
import { User } from "../../models/User.model";

export const updateState = createAction('[Auth Service] updateState', props<{state: UserState}>);
export const updateUser = createAction('[Auth Service] updateUser', props<{user: User}>());
export const deleteUser = createAction('[Auth Service] deleteUser');