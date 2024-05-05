import {Pipe, PipeTransform} from '@angular/core';
/*
 * Returns http error message based on error code
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({
  standalone: true,
  name: 'httpError',
})
export class HttpErrorPipe implements PipeTransform {
  transform(value: number): string {
    let errorMessage = 'Ha habido un error con el login';
    if (value === 403) {
        errorMessage = "Inicio de sesión no autorizado, revisa tus datos.";
    } else if (value === 422) {
        errorMessage = "Ha habido un error inesperado en el servidor, inténtalo más tarde.";	
    }
    return errorMessage;
  }
}
