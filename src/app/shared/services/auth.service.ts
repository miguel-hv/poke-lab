import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User } from '../../models/User.model';
import { CredentialsLogin, CredentialsRegister } from '../../models/Credentials.model';
import { UserState } from '../../models/UserState.model';

const _initialState: UserState = {
  currentUser: null,
  token: '',
  errors: {
    login: 0,
    register: 0,
    // update: '',
    // delete: '',
  },
  keyType: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private _registerUrl = 'https://api.realworld.io/api/users';
  private _loginUrl = 'https://api.realworld.io/api/users/login';
 
  private state = signal<UserState>(_initialState);

  //selectors (only read)
  public currentUser = computed(() => this.state().currentUser);
  public token = computed(() => this.state().token); 
  public errors = computed(() => this.state().errors); 

  register(credentials: CredentialsRegister) {
    this.http.post<User>(this._registerUrl, { user: credentials }).subscribe({
      next: (user) => {
        this.state.update((state) => ({ ...state, currentUser: user, token: user.token }));
        localStorage.setItem('user', JSON.stringify(this.state));
      },
      error: (error: HttpErrorResponse) => {
        this.state.update((state) => ({ ...state, errors: { ...state.errors, register: error.status } }));
      },
    });
  }

  login(credentials: CredentialsLogin) {
    this.http.post<User>(this._loginUrl, { user: credentials }).subscribe({
      next: (user) => {
        this.state.update((state) => ({ ...state, currentUser: user, token: user.token }));
        localStorage.setItem('user', JSON.stringify(this.state));
      },
      error: (error: HttpErrorResponse) => {
        this.state.update((state) => ({ ...state, errors: { ...state.errors, login: error.status }}));
      },
    });
  }

  logout() {
    this.state.update((state) => ({ ...state, currentUser: null, token: '' }));
    localStorage.removeItem('user');
  }

  updateKeyType(key: string) {
    this.state.update((state) => ({ ...state, keyType: key }));
  }
        
}
