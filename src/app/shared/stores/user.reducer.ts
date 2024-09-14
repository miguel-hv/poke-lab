import { createReducer, on } from "@ngrx/store";
import { UserState } from "../../models/UserState.model";
import { updateState, updateUser } from "./user.actions";
import { User } from "../../models/User.model";
import { Pokemon } from "../../models/Pokemon.model";


export const initialState: UserState = {
    currentUser: {} as User,
    token: '',
    errors: {
      login: 0,
      register: 0
    },
    pokemon: {} as Pokemon,
    secrets: []
};


export const userReducer = createReducer(
    initialState,
    on(updateState, (state, newState) => ({...state, state: newState})),
    on(updateUser, (state, user) => ({...state, currentUser: user})),
    // on(updatePokemon, )
)