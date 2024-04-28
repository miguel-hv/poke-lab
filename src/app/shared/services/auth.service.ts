import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
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
  currentUser: User | null;
  token: string;
  errors: UserErrors;
};

const _initialState: UserState = {
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
 
  private state = signal<UserState>(_initialState);

  //selectors
  public currentUser = computed(() => this.state().currentUser);
  public token = computed(() => this.state().token); 
  public errors = computed(() => this.state().errors); 

  constructor(private http: HttpClient) {
   }

  // register(username: string, email: string, password: string): Observable<User> {
  //   return this.http.post<User>(this._registerUrl, { user: { username, email, password } });
  // }

  login(credentials: Credentials) {
    this.http.post<User>(this._loginUrl, { user: credentials}).subscribe({
      next: (user) => {
        this.state.update((state) => {
          return { ...state, currentUser: user, token: user.token };
        });
        localStorage.setItem('user', JSON.stringify(this.state));
      },
      error: (error: Error) => {
        this.state.update((state) => {
          return { ...state, errors: { ...state.errors, login: error.message } };
        });
      },
    })
  }
        

  // getState() {
  //   const state: UserState = {
  //     currentUser: this.currentUser$.asObservable(),
  //     token: this.token$.asObservable(),
  //     errors: this.errors$.asObservable(),
  //   };
  //   return state;
  // } 

  setNoErrors() {
    // this.errors$.next({ ..._initialState.errors });
  }
  

}
