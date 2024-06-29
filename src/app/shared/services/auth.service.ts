import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User } from '../../models/User.model';
import { CredentialsLogin, CredentialsRegister } from '../../models/Credentials.model';
import { UserState } from '../../models/UserState.model';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/Pokemon.model';

const _initialState: UserState = {
  currentUser: null,
  token: '',
  errors: {
    login: 0,
    register: 0,
    // update: '',
    // delete: '',
  },
  pokemon: null,
  secrets: []
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private router = inject(Router);
  private _registerUrl = 'https://api.realworld.io/api/users';
  private _loginUrl = 'https://api.realworld.io/api/users/login';
 
  private state = signal<UserState>(_initialState);

  //selectors (read only)
  public currentUser = computed(() => this.state().currentUser);
  public token = computed(() => this.state().token); 
  public errors = computed(() => this.state().errors); 
  public pokemon = computed(() => this.state().pokemon);
  public secrets = computed(() => this.state().secrets);

  constructor() { 
    if (localStorage.getItem('userState')) {
      this.state.update(() => (
        { ...JSON.parse(localStorage.getItem('userState')!) }
      ));
    }
  }

  register(credentials: CredentialsRegister) {
    this.http.post<{user: User}>(this._registerUrl, { user: credentials }).subscribe({
        next: (data) => {
        
        this.state.update((state) => (
          { ...state, currentUser: data.user, token: data.user.token, errors: { ...state.errors, register: 0 }}
        ));
        localStorage.setItem('userState', JSON.stringify(this.state()));
      },
      error: (error: HttpErrorResponse) => {
        this.state.update((state) => (
          { ...state, errors: { ...state.errors, register: error.status }}
        ));
      },
    });
  }

  login(credentials: CredentialsLogin) {
    this.http.post<{user: User}>(this._loginUrl, { user: credentials }).subscribe({
      next: (data) => {
        console.log(data.user);
        this.state.update((state) => (
          { ...state, currentUser: data.user, token: data.user.token, errors: { ...state.errors, login: 0 }}
        ));
        localStorage.setItem('userState', JSON.stringify(this.state()));
        this.router.navigate(['home']);
      },
      error: (error: HttpErrorResponse) => {
        this.state.update((state) => (
          { ...state, errors: { ...state.errors, login: error.status }}
        ));
      },
    });
  }

  logout() {
    this.state.update(() => ({} as UserState));
    localStorage.removeItem('userState');
    this.router.navigate(['/login']);
    console.log(this.state());
    this.toggleTheme('');
  }
  
  updatePokemon(pokemon: Pokemon) {
    this.state.update((state) => ({ ...state, pokemon: pokemon }));
    localStorage.setItem('userState', JSON.stringify(this.state()));
    this.toggleTheme(pokemon.type);
  }

  addSecret(key: string) {
    this.state.update((state) => ({ ...state, state: state.secrets.push(key) }));
    localStorage.setItem('userState', JSON.stringify(this.state()));
  }

  toggleTheme(type: string): void {
    document.body.classList.remove('leaf-theme');
    document.body.classList.remove('fire-theme');
    document.body.classList.remove('water-theme');
    if (type !== '' ) document.body.classList.add(type+'-theme');
  }
}
