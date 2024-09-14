import { Pokemon } from "./Pokemon.model";
import { User } from "./User.model";

export interface UserState {
    currentUser: User;
    token: string;
    errors: UserErrors;
    pokemon: Pokemon;
    secrets: string[];
};

export interface UserErrors {
    login: number;
    register: number;
    // update: number;
    // delete: number;
};
