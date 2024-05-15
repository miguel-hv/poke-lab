import { User } from "./User.model";

export interface UserState {
    currentUser: User | null;
    token: string;
    errors: UserErrors;
    keyType: string | null;
    secrets: string[];
};

export interface UserErrors {
    login: number;
    register: number;
    // update: number;
    // delete: number;
};
