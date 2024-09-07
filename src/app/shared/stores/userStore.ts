import { signalStore, withMethods, withState } from "@ngrx/signals";
import { initialState } from "./userStates";


export const UserStore = signalStore(
    withState(initialState),
    // withMethods(

    // )
)