# PokeApp

Aplicación que consume una [api de pokémon](https://pokeapi.co/docs/v2) y deja acceder a secciones de  información en función del tipo de pokémon que se haya escogido. El tipo de pokémon también tiene efecto en los estilos de la web. 


## Tareas pendientes
- gestionar errores login y register
- validaciones form y campos de error 
- Definir flujo de selección de pokémon y acceso a las secciones. 3 secciones secretos
- Estilos con tailwind: mobile first
- Estilos en función del tipo de pokémon
- Loader para acceso en las páginas (Angular cdk)
- snackbar con cdk
- textos en json y traducción 
- refactorizar para meter [router module] (https://angular.io/guide/router-tutorial-toh#refactor-the-routing-configuration-into-a-routing-module)
- Accesibilidad
- meter firebase 

## Autenticación y autorización
Autenticación JWT de la aplicación usando como back la [API demo de realworld](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/). Gestionar la autorización para el acceso a distintas partes de la web en función de las credenciales seleccionadas en front.
Basado en la autenticación de [este vídeo](https://www.youtube.com/watch?v=foUS5JlDlCs) y el [repositorio de github](https://github.com/joshuamorony/angularstart-chat), así como en la aplicación del store explicada [en este artículo](https://blog.angulartraining.com/tutorial-state-management-with-observable-store-services-5ba53d87ad94) y adaptada a signals en vez de observables.

### Formulario de autenticación
Dejo la misma contraseña fijada en código para todos los usuarios porque no me interesa que tengan que recordar credenciales. Lo único que van a necesitar para acceder es recordar su nombre de usuario.
De igual manera, en el registro de usuario no pido el correo sino que fijo una asignación porque no se va a utilizar. 

## Modo oscuro o cambio de estilos
Siguiendo la filosofía del cambio de estilos para el modo oscuro se implementa un cambio de estilos global en función del tipo de pokémon que se haya seleccionado. Así, se tiene rojo, verde y azul. No hay un estilo "modo oscuro" como tal.