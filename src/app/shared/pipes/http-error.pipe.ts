import {Pipe, PipeTransform} from '@angular/core';
/*
 * Returns http error message based on error code
 * Usage:
 *   value | httpError : 'type'
 * 
 * Login errors:
 *   401 unauthorized
 *   403 forbidden
 * Register errors:
 *   422 unprocessable entity
 *   500 internal server error
 */
@Pipe({
  standalone: true,
  name: 'httpError',
})
export class HttpErrorPipe implements PipeTransform {
  transform(value: number, type: string): string {
    let errorMessage = 'Ha ocurrido un error';
    console.log(value);
    console.log(type);
    if(type === 'login') {
      if (value === 403) {
        errorMessage = "Inicio de sesión no autorizado, revisa tus datos.";
      } else if (value === 422) {
          errorMessage = "Ha habido un error inesperado en el servidor, inténtalo más tarde.";	
      }
    }

    if(type === 'register') {
      if (value === 422) {
        errorMessage = "Ha habido un error en el registro. Prueba con otro nombre de usuario.";
      }
    }

    return errorMessage;
  }
}
