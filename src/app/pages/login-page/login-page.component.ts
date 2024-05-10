import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AuthFormComponent } from '../../components/forms/auth-form/auth-form.component';
import { CredentialsLogin } from '../../models/Credentials.model';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AuthFormComponent],
  template: `
    <app-auth-form [formType]="'login'" (onFormSubmit)="handleFormSubmit($event)"></app-auth-form>
  `,
  
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  private auth = inject(AuthService);
  private router = inject(Router);
  private _credentialsMiguel = { email: 'mhvz5@example.com', password: 'testmhvz5'};

  constructor() {
    if (this.auth.currentUser()) {
      this.router.navigate(['home']);
    }
  }

  handleFormSubmit(loginUser: CredentialsLogin) {
    this.auth.login(loginUser);
  }
}
