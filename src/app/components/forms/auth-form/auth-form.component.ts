import { Component, input, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CredentialsRegister } from '../../../models/Credentials.model';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {

  //output
  onFormSubmit = output<CredentialsRegister>();
  //input 
  formType = input<string>();

  name = new FormControl('');
  registerForm: FormGroup;
  loginForm: FormGroup;
  constructor(fb: FormBuilder) {

    console.log(this.formType());

    this.registerForm = fb.group({
      username: [''],
      email: [null],
      password: ['salchipapa'] 
    });

    this.loginForm = fb.group({
      email: [null],
      password: ['salchipapa']
    });
  }

  onSubmitRegister() {
    this.registerForm.patchValue({ 
        username: this.name.value,
        email: this.name.value+'@fakemail.com' 
    });
    this.onFormSubmit.emit(this.registerForm.value);
    console.log(this.registerForm.value);
    // this.registerForm.reset();
  }

  onSubmitLogin() {
    this.loginForm.patchValue({ 
      username: this.name.value,
      email: this.name.value+'@fakemail.com' 
    });
    this.onFormSubmit.emit(this.loginForm.value);
    console.log(this.loginForm.value);
    // this.loginForm.reset();
  }
}
