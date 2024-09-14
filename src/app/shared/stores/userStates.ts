import { Pokemon } from "../../models/Pokemon.model";
import { User } from "../../models/User.model";
import { UserState } from "../../models/UserState.model";

// ANGULAR ngrxSIGNALS; does not apply to ngrxStore branch

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