import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AuthFormComponent } from '../../components/forms/auth-form/auth-form.component';
import { CredentialsRegister } from '../../models/Credentials.model';
import { UrlRoutes } from '../../shared/enumerators/urlRoutes.enum';
import { UserStore } from '../../shared/stores/userStore';

const routesenum = UrlRoutes;

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  private auth = inject(AuthService);
  private store = inject(UserStore);
  private router = inject(Router);

  constructor() {
    if (this.store.currentUser()) {
      this.router.navigate([routesenum.home]);
    }
  }

  handleFormSubmit(loginUser: CredentialsRegister) {
    //handle register in auth service
    this.auth.login(loginUser);
  }
}
