import { createAction, props } from "@ngrx/store";
import { UserState } from "../../models/UserState.model";
import { User } from "../../models/User.model";
import { Pokemon } from "../../models/Pokemon.model";

export const updateState = createAction('[Auth Service] updateState', props<UserState>());
export const updateUser = createAction('[Auth Service] updateUser', props<User>());
// export const updatePokemon = createAction('[Auth Service] updatePokemon', props<Pokemon>());
export const deleteUser = createAction('[Auth Service] deleteUser');