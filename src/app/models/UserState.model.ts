import { User } from "./User.model";

export interface UserState {
    currentUser: User | null;
    token: string;
    errors: UserErrors;
    keyType: string | null;
};

interface UserErrors {
    login: string;
    // register: string;
    // update: string;
    // delete: string;
};
