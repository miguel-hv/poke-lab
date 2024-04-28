import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  providers: [AuthService],
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
      if (this.auth.currentUser()) {
        console.log(this.auth.currentUser());
        this.router.navigate(['home']);
      }
    });
  }

  login() {
    this.auth.login(this._credentialsMiguel);
    console.log(this.auth.currentUser());
  }
}
