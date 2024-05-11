import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { CredentialsRegister } from '../../../models/Credentials.model';
import { AuthService } from '../../../shared/services/auth.service';
import { HttpErrorPipe } from '../../../shared/pipes/http-error.pipe';
import { RouterModule } from '@angular/router';
import { alphanumericalValidator } from '../../../shared/validators/CustomValidators';

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
  public name: FormControl;
  private registerForm: FormGroup;
  private loginForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.name = new FormControl('', [Validators.required, alphanumericalValidator()]);

    this.registerForm = fb.group({
      username: [''],
      email: [null],
      password: ['pepito'] 
    });

    this.loginForm = fb.group({
      email: [null],
      password: ['pepito']
    });

  }

  displayName() {
    console.log(this.name.value);
    console.log(this.name.errors);
    console.log(this.name);
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
