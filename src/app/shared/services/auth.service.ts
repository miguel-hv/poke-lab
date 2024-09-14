import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User } from '../../models/User.model';
import { CredentialsLogin, CredentialsRegister } from '../../models/Credentials.model';
import { UserState } from '../../models/UserState.model';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/Pokemon.model';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';
import { UserStore } from '../stores/userStore';
import { Store } from '@ngrx/store';
import { updateUser } from '../stores/user.actions';
import { userReducer } from '../stores/user.reducer';

const urlRoutes = UrlRoutes;

const _initialState: UserState = {
  currentUser: {} as User,
  token: '',
  errors: {
    login: 0,
    register: 0
  },
  pokemon: {} as Pokemon,
  secrets: []
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private router = inject(Router);
  readonly store = inject(Store<{user: User}>);

  private _registerUrl = 'https://api.realworld.io/api/users';
  private _loginUrl = 'https://api.realworld.io/api/users/login';
 

  constructor() { 
    const localState = localStorage.getItem('userState');
    // if (localState && localState !== 'undefined') {
    //     this.store.updateState({ ...JSON.parse(localState) });
    //     console.log(this.store.pokemon());
    //   if (this.store.pokemon()) {
    //     this.toggleTheme(this.store.pokemon()!.type);
    //   }
    // }
  }

  register(credentials: CredentialsRegister) {
      let userMock : User =  {
        email: 'string',
        token: 'string',
        username: credentials.username,
        bio: 'string',
        image: 'string',
    }
    //TODO: llamar sotre
    // localStorage.setItem('userState', JSON.stringify(this.store.getState()));
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
    // update user
    this.store.dispatch(updateUser(userMock));

    // get user with signal
        // const user = this.store.selectSignal(updateUser);
        // save user with signal
        // localStorage.setItem('userState', JSON.stringify(user()));

    // get user with subscriber
    let user: UserState;
    this.store.select('user').subscribe({next: (x:UserState)=> {
      user = x;
      localStorage.setItem('userState', JSON.stringify(user));
      if (!user.pokemon) {
        this.router.navigate([urlRoutes.welcome]);
      } else {
        this.router.navigate([urlRoutes.home]);
      }
    }});
  }

  logout() {
    // this.store.deleteUser();
    localStorage.removeItem('userState');
    this.router.navigate([urlRoutes.access]);
    this.toggleTheme('');
  }
  
  updatePokemon(pokemon: Pokemon) {
    // this.store.updatePokemon(pokemon);
    // localStorage.setItem('userState', JSON.stringify(this.store.getState()));
    this.toggleTheme(pokemon.type);
  }

  addSecret(key: string) {
    // this.store.addSecret(key);
    // localStorage.setItem('userState', JSON.stringify(this.store.getState()));
  }

  toggleTheme(type: string): void {
    document.body.classList.remove('leaf-theme');
    document.body.classList.remove('fire-theme');
    document.body.classList.remove('water-theme');
    if (type !== '' ) document.body.classList.add(type+'-theme');
  }

}
