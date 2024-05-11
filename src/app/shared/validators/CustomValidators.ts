import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

  export function alphanumericalValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /[^A-Za-z0-9]/g;
      const hasSpecialChars = regex.test(control.value);
      if (hasSpecialChars) {
        return {hasSpecialChars: true}; 
       } else {
        return null;
       } 
    } 
  } 

  @Directive({
    selector: '[appAlphanumericalValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: AlphanumericalValidatorDirective, multi: true}],
  })
  export class AlphanumericalValidatorDirective implements Validator {
    @Input('appAlphanumericalValidator') alphanumerical = '';
    validate(control: AbstractControl): ValidationErrors | null {
      return this.alphanumerical
        ? alphanumericalValidator()(control)
        : null;
    }
  }

