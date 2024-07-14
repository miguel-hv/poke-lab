import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private accessForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.name = new FormControl('', [Validators.required, alphanumericalValidator()]);

    this.accessForm = fb.group({
      username: [''],
      email: [null],
      password: ['pepito'] 
    });

  }

  onSubmitForm() {
    this.accessForm.patchValue({
      username: this.name.value,
      email: this.name.value+'@fakemail.com' 
    });
    console.log(this.accessForm.value);
    this.onFormSubmit.emit(this.accessForm.value);
  } 
}
