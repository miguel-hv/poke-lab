import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/User.model';
import { Credentials } from '../../models/Credentials.model';

interface UserErrors {
  login: string;
  // register: string;
  // update: string;
  // delete: string;
};

//user store
export interface UserState {
  currentUser: Observable<User | null>;
  token: Observable<string>;
  errors: Observable<UserErrors>;
};

const _initialState: {
  currentUser: User | null,
  token: string,
  errors: UserErrors
} = {
  currentUser: null,
  token: '',
  errors: {
    login: '',
    // register: '',
    // update: '',
    // delete: '',
  }
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'https://api.realworld.io/api/users';
  private _loginUrl = 'https://api.realworld.io/api/users/login';
 
  private currentUser$: BehaviorSubject<User | null>;
  private token$: BehaviorSubject<string>;
  private errors$: BehaviorSubject<UserErrors>;

  constructor(private http: HttpClient) {
    this.currentUser$ = new BehaviorSubject(_initialState.currentUser);
    this.token$ = new BehaviorSubject(_initialState.token);
    this.errors$ = new BehaviorSubject(_initialState.errors);
   }

  register(username: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(this._registerUrl, { user: { username, email, password } });
  }

  login(credentials: Credentials) {
    this.http.post<User>(this._loginUrl, { user: credentials}).subscribe({
      next: (user) => {
        this.currentUser$.next(user);
        this.token$.next(user.token);
        localStorage.setItem('user', JSON.stringify(user));
        
      },
      error: (error: Error) => {
        this.errors$.next({ login: error.message });
      },
    })
  }
        

  getState() {
    const state: UserState = {
      currentUser: this.currentUser$.asObservable(),
      token: this.token$.asObservable(),
      errors: this.errors$.asObservable(),
    };
    return state;
  } 

  setNoErrors() {
    this.errors$.next({ ..._initialState.errors });
  }
  

}
