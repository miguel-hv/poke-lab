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

  onSubmit() {
    this.registerForm.patchValue({ email: this.registerForm.value.user+'@fakemail.com' });
    this.onFormSubmit.emit(this.registerForm.value);
    this.registerForm.reset();
    console.log(this.registerForm.value);
  }
}
