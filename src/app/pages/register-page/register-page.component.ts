import { Component, effect, inject } from '@angular/core';
import { CredentialsRegister } from '../../models/Credentials.model';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { AuthFormComponent } from '../../components/forms/auth-form/auth-form.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [AuthFormComponent],
  template: `
  <app-auth-form [formType]="'register'" (onFormSubmit)="handleFormSubmit($event)"></app-auth-form>
  `,
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  private auth = inject(AuthService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      if (this.auth.currentUser()) {
        this.router.navigate(['home']);
      }
    });
  }

  handleFormSubmit(registerUser: CredentialsRegister) {
    this.auth.register(registerUser);
  }
}
