import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredentialsRegister } from '../../../models/Credentials.model';
import { HttpErrorPipe } from '../../../shared/pipes/http-error.pipe';
import { RouterModule } from '@angular/router';
import { alphanumericalValidator } from '../../../shared/validators/CustomValidators';
import { UserStore } from '../../../shared/stores/userStore';


@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpErrorPipe, RouterModule, FormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {

  //output
  onFormSubmit = output<CredentialsRegister>();
  //input 
  formType = input<string>();

  public  store = inject(UserStore);
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
    this.onFormSubmit.emit(this.accessForm.value);
  } 
}
