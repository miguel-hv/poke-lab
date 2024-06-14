# PokeApp

Aplicación que consume una [api de pokémon](https://pokeapi.co/docs/v2) y deja acceder a secciones de  información en función del tipo de pokémon que se haya escogido. El tipo de pokémon también tiene efecto en los estilos de la web. 


## Opciones a explorar
- meter material, primeng y taigaui para comparar? -> empezar con cdk y ver si suficiente
- Estilos con tailwind? -> más reusable ITCSS librería propia
- Loader para acceso en las páginas (Angular cdk)
- textos en json y traducción 
- refactorizar para meter [router module] (https://angular.io/guide/router-tutorial-toh#refactor-the-routing-configuration-into-a-routing-module)
- Accesibilidad
- meter firebase 

## Manejo de estado
Se crea un servicio (auth) para manejar el estado del usuario en la aplicación. Se ha optado por sustituir la estrategia de observables por las signals, de acuerdo a [este artículo](https://blog.angulartraining.com/angular-signal-based-components-tutorial-4e4b4b1dfa96) y a [este otro artículo](https://blog.angulartraining.com/angular-signals-best-practices-around-exposing-signals-5385452150a1).

## Autenticación y autorización
Autenticación JWT de la aplicación usando como back la [API demo de realworld](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/). Gestionar la autorización para el acceso a distintas partes de la web en función de las credenciales seleccionadas en front.
Basado en la autenticación de [este vídeo](https://www.youtube.com/watch?v=foUS5JlDlCs) y el [repositorio de github](https://github.com/joshuamorony/angularstart-chat), así como en la aplicación del store explicada [en este artículo](https://blog.angulartraining.com/tutorial-state-management-with-observable-store-services-5ba53d87ad94) y adaptada a signals en vez de observables.

### Formulario de autenticación
Dejo la misma contraseña fijada en código para todos los usuarios porque no me interesa que tengan que recordar credenciales. Lo único que van a necesitar para acceder es recordar su nombre de usuario.
De igual manera, en el registro de usuario no pido el correo sino que fijo una asignación porque no se va a utilizar. 

## Modo oscuro o cambio de estilos
Siguiendo la filosofía del cambio de estilos para el modo oscuro se implementa un cambio de estilos global en función del tipo de pokémon que se haya seleccionado. Así, se tiene rojo, verde y azul. Tomé el formato de [este artículo](https://blog.angulartraining.com/how-to-implement-a-dark-theme-with-css-and-angular-2cfd98b9455d) aunque aquí no hay un estilo "modo oscuro" como tal.

## Estilos y arquitectura ITCSS
Los estilos están organizados según una arquitectura ITCSS copiando [este repo de github](https://github.com/abelcabezaroman/scss-architecture/blob/master/settings/_base.settings.scss). 
Esto permite reutilizar código css usando elementos como si se tratase de una librería completamente personalizada. 
Adicionalmente para ayudar a la claridad y mantenibilidad, uso notación BEM en los nombres de las clases CSS.

### Angular Material
Uso el [_Component Dev Kit_ (cdk) de Angular Material](https://material.angular.io/cdk/categories) para modales y otros componentes de forma que me ayude con la funcionalidad y accesibilidad.