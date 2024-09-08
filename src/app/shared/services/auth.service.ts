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
 

  constructor() { 
    const localState = localStorage.getItem('userState');
    if (localState && localState !== 'undefined') {
        this.store.updateState({ ...JSON.parse(localState) });
        console.log(this.store.pokemon());
      if (this.store.pokemon()) {
        this.toggleTheme(this.store.pokemon()!.type);
      }
    }
    console.log(this.store.getState());
  }

  register(credentials: CredentialsRegister) {
      let userMock : User =  {
        email: 'string',
        token: 'string',
        username: credentials.username,
        bio: 'string',
        image: 'string',
    }
    this.store.updateUser(userMock);
    localStorage.setItem('userState', JSON.stringify(this.store.getState()));
    this.router.navigate([urlRoutes.welcome]);
  }

  login(credentials: CredentialsRegister) {
    let userMock : User =  {
      email: 'string',
      token: 'string',
      username: credentials.username,
      bio: 'string',
      image: 'string',
    }
    this.store.updateUser(userMock);
    //TODO: ¿pasar a side effects de store?
    localStorage.setItem('userState', JSON.stringify(this.store.getState()));
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
    // this.state.update(() => ({} as UserState));
    this.store.deleteUser();
    localStorage.removeItem('userState');
    this.router.navigate([urlRoutes.access]);
    this.toggleTheme('');
  }
  
  updatePokemon(pokemon: Pokemon) {
    // this.state.update((state) => ({ ...state, pokemon: pokemon }));
    this.store.updatePokemon(pokemon);
    localStorage.setItem('userState', JSON.stringify(this.store.getState()));
    this.toggleTheme(pokemon.type);
  }

  addSecret(key: string) {
    // this.state.update((state) => ({ ...state, secrets: [...state.secrets ? state.secrets : [], key] }));
    this.store.addSecret(key);
    localStorage.setItem('userState', JSON.stringify(this.store.getState()));
  }

  toggleTheme(type: string): void {
    document.body.classList.remove('leaf-theme');
    document.body.classList.remove('fire-theme');
    document.body.classList.remove('water-theme');
    if (type !== '' ) document.body.classList.add(type+'-theme');
  }

}
