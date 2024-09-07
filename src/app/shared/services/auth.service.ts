import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User } from '../../models/User.model';
import { CredentialsLogin, CredentialsRegister } from '../../models/Credentials.model';
import { UserState } from '../../models/UserState.model';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/Pokemon.model';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';
import { UserStore } from '../stores/userStore';

const urlRoutes = UrlRoutes;

const _initialState: UserState = {
  currentUser: null,
  token: '',
  errors: {
    login: 0,
    register: 0
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
  readonly store = inject(UserStore);

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
    const localState = localStorage.getItem('userState');
    if (localState) {
      this.state.update(() => (
        { ...JSON.parse(localState) }
      ));
      if (this.state().pokemon) {
        this.toggleTheme(JSON.parse(localState).pokemon.type);
      }
    }
  }

  register(credentials: CredentialsRegister) {
    this.http.post<{user: User}>(this._registerUrl, { user: credentials }).subscribe({
        next: (data) => {
        this.state.update((state) => ({
          ...state,
          currentUser: data.user,
          token: data.user.token,
          errors: { ...state.errors, register: 0 }
        }));
        localStorage.setItem('userState', JSON.stringify(this.state()));
        this.router.navigate([urlRoutes.welcome]);
      },
      error: (error: HttpErrorResponse) => {
        this.state.update((state) => (
          { ...state, errors: { ...state.errors, register: error.status }}
        ));
      },
    });
  }

  login(credentials: CredentialsRegister) {
    // const credentialsLogin: CredentialsLogin = {
    //   email: credentials.email,
    //   password: credentials.password
    // };
    // this.http.post<{user: User}>(this._loginUrl, { user: credentialsLogin }).subscribe({
    //   next: (data) => {
        // this.state.update((state) => ({ 
        //   ...state, 
        //   currentUser: data.user, 
        //   token: data.user.token,
        //   errors: { ...state.errors, login: 0 }
        // }));
        let userMock : User =  {
          email: 'string',
          token: 'string',
          username: credentials.username,
          bio: 'string',
          image: 'string',
      }
      this.state.update((state) => ({ 
        ...state, 
        currentUser: userMock, 
        token: 'data.user.token',
        errors: { ...state.errors, login: 0 }
      }));
        this.store.updateUser(userMock);
        //TODO: ¿pasar a side effects de store?
        localStorage.setItem('userState', JSON.stringify(this.state()));
        if (!this.store.pokemon()) {
          this.router.navigate([urlRoutes.welcome]);
        } else {
          this.router.navigate([urlRoutes.home]);
        }
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     this.state.update((state) => ({
    //        ...state, 
    //        errors: { ...state.errors, login: error.status }
    //     }));
    //     if (error.status === 403) {
    //       this.register(credentials);
    //     }
    //   },
    // });
  }

  logout() {
    this.store.deleteUser();
    this.state.update(() => ({} as UserState));
    localStorage.removeItem('userState');
    this.router.navigate([urlRoutes.access]);
    this.toggleTheme('');
  }
  
  updatePokemon(pokemon: Pokemon) {
    this.state.update((state) => ({ ...state, pokemon: pokemon }));
    localStorage.setItem('userState', JSON.stringify(this.state()));
    this.toggleTheme(pokemon.type);
  }

  addSecret(key: string) {
    this.state.update((state) => ({ ...state, secrets: [...state.secrets ? state.secrets : [], key] }));
    localStorage.setItem('userState', JSON.stringify(this.state()));
  }

  toggleTheme(type: string): void {
    document.body.classList.remove('leaf-theme');
    document.body.classList.remove('fire-theme');
    document.body.classList.remove('water-theme');
    if (type !== '' ) document.body.classList.add(type+'-theme');
  }

  removeUser() {
    this.state.update(() => ({} as UserState));
    localStorage.removeItem('userState');
  }
}
