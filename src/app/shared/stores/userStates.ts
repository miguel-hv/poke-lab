import { UserState } from "../../models/UserState.model";

export const initialState: UserState = {
    currentUser: null,
    token: '',
    errors: {
      login: 0,
      register: 0
    },
    pokemon: null,
    secrets: []
  };