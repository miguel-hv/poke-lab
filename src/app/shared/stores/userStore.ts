import { getState, patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { initialState } from "./userStates";
import { User } from "./../../models/User.model";
import { Pokemon } from "../../models/Pokemon.model";
import { UserState } from "../../models/UserState.model";


export const UserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({   
        updateState(state: UserState){
            patchState(store, state)
        },
        updateUser(user: User): void {
            patchState(store, () => ({currentUser: user}));
        },
        deleteUser(): void {
            patchState(store, initialState);
        },
        updatePokemon(pokemon: Pokemon){
            patchState(store, () => ({pokemon: pokemon}));
        },
        addSecret(key: string){
            patchState(store, (state) => ({ ...state, secrets: [...state.secrets ? state.secrets : [], key] }));

        },
        getState() {
            return getState(store);
        }

    }))
)