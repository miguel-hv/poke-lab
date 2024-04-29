# PokeApp

Aplicación que consume una [api de pokémon](https://pokeapi.co/docs/v2) y deja acceder a secciones de  información en función del tipo de pokémon que se haya escogido. El tipo de pokémon también tiene efecto en los estilos de la web. 


## Tareas pendientes
- login y register comparten componente auth-form (solo campo login, misma contraseña jarcodeada)
- los tres personajes solo a nivel local como llaves de acceso
- gestionar errores login y register
- Definir flujo de selección de pokémon y acceso a las secciones. 3 secciones secretos
- Estilos con tailwind: mobile first
- Estilos en función del tipo de pokémon
- Loader para acceso en las páginas (Angular cdk)
- snackbar con cdk
- refactorizar para meter [router module] (https://angular.io/guide/router-tutorial-toh#refactor-the-routing-configuration-into-a-routing-module)
- Accesibilidad
- meter firebase 

## Autenticación y autorización

### Objetivo 
Autenticación JWT de la aplicación usando como back la [API demo de realworld](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/). Gestionar la autorización para el acceso a distintas partes de la web en función de las credenciales seleccionadas en front.
Basado en la autenticación de [este vídeo](https://www.youtube.com/watch?v=foUS5JlDlCs) y el [repositorio de github](https://github.com/joshuamorony/angularstart-chat).

