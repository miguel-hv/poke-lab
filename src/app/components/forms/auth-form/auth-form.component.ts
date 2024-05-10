import { Component, effect, inject, input, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CredentialsRegister } from '../../../models/Credentials.model';
import { AuthService } from '../../../shared/services/auth.service';
import { UserErrors } from '../../../models/UserState.model';
import { HttpErrorPipe } from '../../../shared/pipes/http-error.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpErrorPipe, RouterModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {

  //output
  onFormSubmit = output<CredentialsRegister>();
  //input 
  formType = input<string>();

  public  auth = inject(AuthService);
  public name = new FormControl('');
  private registerForm: FormGroup;
  private loginForm: FormGroup;
  private authErrors: UserErrors = { 
    login: 0, 
    register: 0
   };

  constructor(fb: FormBuilder) {

    this.registerForm = fb.group({
      username: [''],
      email: [null],
      password: ['salchipapa'] 
    });

    this.loginForm = fb.group({
      email: [null],
      password: ['salchipapa']
    });

    effect(() => {
        console.log(this.auth.currentUser());
    });
  }

  onSubmitRegister() {
    this.registerForm.patchValue({ 
        username: this.name.value,
        email: this.name.value+'@fakemail.com' 
    });
    this.onFormSubmit.emit(this.registerForm.value);
  }

  onSubmitLogin() {
    this.loginForm.patchValue({ 
      username: this.name.value,
      email: this.name.value+'@fakemail.com' 
    });
    this.onFormSubmit.emit(this.loginForm.value);
  }
}
