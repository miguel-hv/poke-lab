import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { initialState } from "./userStates";
import { User } from "./../../models/User.model";


export const UserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({   
        updateUser(user: User): void {
            patchState(store, () => ({currentUser: user}));
        },
        deleteUser(): void {
            patchState(store, initialState);
            console.log(store);
        }
    }))
)