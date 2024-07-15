# PokeApp

Aplicación demo presentando un minijuego donde en función del tipo de pokémon que se haya escogido deja acceder a secciones de la aplicación para conseguir distintos secretos. Una vez se recojan los 3 secretos el minijuego se acaba y se resetea. Se usa una api demo pública para crear el usuario.

La aplicación está concebida para visualizar en dispositivos móviles debido a su sencillez gráfica, de manera que se muestra un marco en escritorio para simplificar la maquetación. Es una aplicación muy simple y con una funcionalidad muy básica pero que me permite investigar ciertos temas de interés para mí.

El objetivo es investigar y trabajar varias facetas del desarrollo y mantenimiento de una web, buscando artículos de expertos en Angular para tratar de encontrar y desarrollar una guía fiable de buenas prácticas para el día a día. No se busca tener las mejores prácticas en cuanto a limpieza de código sino encontrar una arquitectura mantenible y flexible para los proyectos habituales de frontend. 

Los principales puntos a trabajar son los siguientes:
- gestión de estados en un store y gestión de roles de usuario (permisos en función de si se está logado y de qué pokémon se selecciona)
- gestión de clases de estilos (notación BEM y reutilización) y distintos temas de estilos (el tipo de pokémon tiene efecto en los estilos de la web). 
- librería de componentes que permita rápida personalización (ITCSS y angular material cdk)


## En curso
	1 maquetar welcome
	3 validación input sin espacios
	2 gestionar el error de login para que aparezca un mensaje diciendo que se crea cuenta nueva 
	2 maquetar menú
	2 maquetar pantalla selección de pokemon con los sprites y las pokeballs
	1 estilos header: icono para logout y secretos, fuentes para títulos y demás, estilos cuando no hay pokémon 
- en registro/login sacar una cabecera con imagen
	1 cambiar fuente a no serif
	1 maquetar secretos en secretos poner el texto del secreto en sí debajo de la imagen
	2 maquetar dialog: botones ok y no basados en el logo pokémon
	2 estilos (elegir colores): usar hsl en vez de rgb	
https://material.angular.io/guide/theming#defining-a-theme
	3 estilos a material: ¿cambiar color de botones, etc?
	3 en service hacer funciones para gestionar localstate y router? y el update de state
	3 fuente imágenes en readme
	0 cambiar los css de lef-rit a block-start e inlinestart
	0 ver container queries
	0 ver mixins y si son más apropiadas para dar estilos a button en vez de crear un componente button
o mejor coger button de cdk
	0 meter animaciones
	3 cuando se complete el juego, borrar usuario y localhost y lanzar modal mewtwo
	2 cambiar el estilo en función del pokémon (ver mejor forma de gestionar estilos)
	4 borrar archivos scss y html que no hagan falta (test dejarlos para probar)
	4 escribir readme sobre el store con signals y cómo las computed son solo para leer y cómo en el header se pueden usar 
para el template
	5 borrar footer 



## Opciones a explorar
- Estilos con tailwind? -> más reusable ITCSS librería propia
- Loader para acceso en las páginas (Angular cdk)
- textos en json y traducción 
- refactorizar para meter [router module] (https://angular.io/guide/router-tutorial-toh#refactor-the-routing-configuration-into-a-routing-module)
- Accesibilidad


## Autenticación y autorización
Autenticación JWT de la aplicación usando como back la [API demo de realworld](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/). Gestionar la autorización para el acceso a distintas partes de la web en función de las credenciales seleccionadas en front.
Basado en la autenticación de [este vídeo](https://www.youtube.com/watch?v=foUS5JlDlCs) y el [repositorio de github](https://github.com/joshuamorony/angularstart-chat), así como en la aplicación del store explicada [en este artículo](https://blog.angulartraining.com/tutorial-state-management-with-observable-store-services-5ba53d87ad94) y adaptada a signals en vez de observables de acuerdo a lo establecido en el [siguiente artículo](https://blog.angulartraining.com/angular-signal-based-components-tutorial-4e4b4b1dfa96).

### Formulario de autenticación
Dejo la misma contraseña fijada en código para todos los usuarios porque no me interesa que tengan que recordar credenciales. Lo único que van a necesitar para acceder es recordar su nombre de usuario.
De igual manera, en el registro de usuario no pido el correo sino que fijo una asignación porque no se va a utilizar pero se necesita para el login y registro. 

## Manejo de estado
Se crea un servicio (auth) para manejar el estado del usuario en la aplicación. Se ha optado por sustituir la estrategia de observables por las signals, de acuerdo a [este artículo](https://blog.angulartraining.com/angular-signal-based-components-tutorial-4e4b4b1dfa96) y a [este otro artículo](https://blog.angulartraining.com/angular-signals-best-practices-around-exposing-signals-5385452150a1).

## Modo oscuro o cambio de estilos
Siguiendo la filosofía del cambio de estilos para el modo oscuro se implementa un cambio de estilos global en función del tipo de pokémon que se haya seleccionado. Así, se tiene rojo, verde y azul. Tomé el formato de [este artículo](https://blog.angulartraining.com/how-to-implement-a-dark-theme-with-css-and-angular-2cfd98b9455d) aunque aquí no hay un estilo "modo oscuro" como tal.

## Estilos y arquitectura ITCSS
Los estilos están organizados según una arquitectura ITCSS copiando [este repo de github](https://github.com/abelcabezaroman/scss-architecture/blob/master/settings/_base.settings.scss). 
Esto permite reutilizar código css usando elementos como si se tratase de una librería completamente personalizada. 
Adicionalmente para ayudar a la claridad y mantenibilidad, uso notación BEM en los nombres de las clases CSS.
No me acaba de convencer el estilo de tailwind o de hacer una librería propia parecida porque implica tener un template html muy cargado de texto y entiendo que se pierde legibilidad a la hora de del mantenimiento. Me quedo con los estilos en css pero la idea es componentizar al máximo las páginas para favorecer la reutilización. 
En este sentido estoy pensando más en imitar la composición de React aprovechando la flexibilidad de los nuevos componentes standalone de Angular. 

### Angular Material
Uso el [_Component Dev Kit_ (cdk) de Angular Material](https://material.angular.io/cdk/categories) para modales y otros componentes de forma que me ayude con la funcionalidad y accesibilidad. De esta manera puedo tener rápido acceso a funcionalidades completas en cuanto a accesibilidad y usabilidad pero manteniendo los componentes completamente personalizables.

### Colores HSL
Uso la configuración de colores mediante tono, saturación y luz (Hue, Saturation, Lightness) para interaccionar de forma más intuitiva con la paleta de colores.
El porqué en [este artículo](https://www.uifrommars.com/que-es-hsl/);

### Clases componentes
Para evitar usar Angular Material estoy cogiendo algunos estilos de codepen como el [input](https://codepen.io/amankriet/pen/dyEXNQZ) o el [button](https://codepen.io/ericadamski/pen/ZBxavq). Estilar o componentizar este tipo de elementos no es algo que forme parte de este proyecto, así que no están bien pulidos.

## Imágenes
Las imágenes usadas en esta aplicación fueron obtenidas de las siguientes fuentes:

## Cosas que haría distinto
Hay ciertas cosas relativas al flujo y el diseño que no me convencen pero en las que no quiero detenerme mucho tiempo:
- el login/registro debería estar más claro de cara a que el usuario sepa qué hacer y qué va a pasar
- diseño de los componentes (botones, inputs, fuentes, colores, etc.)
