import { Component, effect, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  private auth = inject(AuthService);
  private router = inject(Router);
  private _credentialsMiguel = { email: 'mhvz5@example.com', password: 'testmhvz5'};

  constructor() {
    effect(() => {
      if (this.auth.getState().currentUser) {
        this.router.navigate(['home']);
      }
    });
  }

  login() {
    this.auth.login(this._credentialsMiguel);
    console.log(this.auth.getState());
  }
}
