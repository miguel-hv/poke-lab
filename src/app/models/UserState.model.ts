import { Pokemon } from "./Pokemon.model";
import { User } from "./User.model";

export interface UserState {
    currentUser: User | null;
    token: string;
    errors: UserErrors;
    pokemon: Pokemon | null;
    secrets: string[];
};

export interface UserErrors {
    login: number;
    register: number;
    // update: number;
    // delete: number;
};
