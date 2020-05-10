# piggy-bank
Trabajo final del Máster Universitario en Desarrollo de Sitios y Aplicaciones Web

## Instrucciones de instalación

En la parte del front-end es necesario la instalación de:
* Nodejs + npm: en concreto para la aplicación desarrollada se ha utilizado la versión 12.6.1 de Nodejs y la versión 6.4.12 de npm. Estas herramientas nos permiten la gestión de paquetes a través del package.json y de poder tener un entorno de desarrollo donde poder ir construyendo la aplicación. Podemos obtener esta herramienta desde su página web https://nodejs.org/es/ y descargar el ejecutable recomendable para la mayoría
* Angular: mediante npm podemos descargar Angular CLI, herramienta necesaria para la creación tanto del proyecto de Angular como de los elementos del propio framework que vayamos creando. Se instala mediante npm install @angular/cli@latest. A continuación, creamos el proyecto mediante ng new nombreproyecto y con ello ya tenemos nuestro proyecto listo en Angular 9 para comenzar el desarrollo.

En la parte del back-end es necesario la instalación de:
* XAMPP: es un servidor web que nos proporciona todo lo necesario para poder arrancar una aplicación PHP: Servidor Apache, el propio lenguaje PHP, base de datos MySQL y administrador de base de datos phpMyAdmin. Para poder utilizarla sólo es necesario arrancar el servidor Apache y MySQL desde su panel de control, además de tener nuestro proyecto en la carpeta htdocs. 
* Composer: es un gestor de dependencias para PHP que podemos instalar a partir del ejecutable descargable de su página web.
* Laravel: es un framework PHP que gracias a la tecnología anteriormente comentada, podemos crear un proyecto en Laravel 7 mediante: 
		composer create-project laravel/laravel PiggyBank –prefer-dist

## Instrucciones de uso

* Registro de usuarios
	* Desde la pantalla de bienvenida, accedemos al enlace “Registrarse”
	* Se rellenan los campos nombre, apellidos, correo electrónico, contraseña y repetir contraseña.
	* Si se ha realizado con éxito, navegaremos automáticamente a la pantalla de inicio sesión donde aparece un mensaje de éxito con fondo verde y en caso contrario aparece un mensaje de error con fondo rojo.
* Iniciar sesión
	* Desde la pantalla de bienvenida, accedemos al enlace “Iniciar sesión” o desde la pantalla de registro pulsando sobre el enlace “Si ya tienes una cuenta, inicia sesión”
	* Se rellenan los campos correo electrónico y contraseña.
	* Si se ha realizado con éxito, navegaremos automáticamente dentro de la aplicación y en caso contrario aparece un mensaje de error con fondo rojo.
* Olvidaste tu contraseña
	* Se rellena el campo correo electrónico.
	* Se nos envía a nuestro corre un token que debemos utilizar en el formulario que nos aparece de forma automática introduciendo el token comentado y la nueva contraseña.
	* Si se ha realizado con éxito, navegaremos automáticamente a la pantalla de inicio sesión donde aparece un mensaje de éxito con fondo verde y en caso contrario aparece un mensaje de error con fondo rojo.
* Usuarios (rol administrador)
	* Búsqueda. Se pueden buscar usuarios filtrando por nombre, apellidos, correo electrónico o rol.
	* Añadir: pulsamos el botón de “Añadir”, rellenamos el formulario que nos aparece y pulsamos sobre el botón "Guardar”.
	* Editar: pulsamos sobre el usuario que deseamos editar, modificamos los valores que deseamos y pulsamos sobre el botón “Guardar”.
	* Eliminar: pulsamos sobre el usuario que deseamos eliminar y apretamos el botón “Eliminar”. Una vez hecho esto, nos aparece un mensaje de confirmación que debemos confirmar en caso que deseemos borrar el usuario.
* Tipos de gastos/Tipos de ganancias (rol administrador)
	* Búsqueda. Se pueden buscar tipos filtrando por el campo valor
	* Añadir: pulsamos el botón de “Añadir”, rellenamos el formulario que nos aparece y pulsamos sobre el botón "Guardar”.
	* Editar: pulsamos sobre el tipo que deseamos editar, modificamos los valores que deseamos y pulsamos sobre el botón “Guardar”.
	* Eliminar: pulsamos sobre el usuario que deseamos eliminar y apretamos el botón “Eliminar”. Una vez hecho esto, nos aparece un mensaje de confirmación que debemos confirmar en caso que deseemos borrar el tipo.
* Buenas prácticas (rol administrador)
	* Búsqueda. Se pueden buscar buenas prácticas filtrando por palabra clave
	* Añadir: pulsamos el botón de “Añadir”, rellenamos el formulario que nos aparece y pulsamos sobre el botón "Guardar”.
	* Editar: pulsamos sobre la buena práctica que deseamos editar, modificamos los valores que deseamos y pulsamos sobre el botón “Guardar”.
	* Eliminar: pulsamos sobre la buena práctica que deseamos eliminar y apretamos el botón “Eliminar”. Una vez hecho esto, nos aparece un mensaje de confirmación que debemos confirmar en caso que deseemos borrar el tipo.
* Gastos (rol usuario)
	* Accedemos a la opción del menú Gastos
	* Búsqueda. Se pueden buscar gastos filtrando por nombre o tipo de gasto.
	* Eliminar: pulsamos sobre el botón con icono de papelera del gasto que queremos eliminar. Una vez hecho esto, nos aparece un mensaje de confirmación que debemos confirmar en caso que deseemos borrar el gasto.
	* Añadir: pulsamos sobre el botón de “Añadir” y navegamos de forma automática a la pantalla de detalle del gasto. En ella debemos rellenar el formulario que se nos presenta y pulsar una vez finalizado, sobre el botón “Guardar”. En caso de éxito se muestra un mensaje con fondo verde y en caso contrario, un mensaje de error con fondo rojo.
	* Editar: pulsamos sobre el botón con icono de lápiz del gasto que queremos editar. Una vez hecho esto, navegamos de forma automática a la pantalla de detalle del gasto donde podemos modificar el campo del gasto que deseamos editar. Además, podemos añadir nuevos pagos al gasto en cuestión
* Ganancias (rol usuario)
	* Accedemos a la opción del menú Ganancias
	* Búsqueda. Se pueden buscar ganancias filtrando por nombre o tipo de ganancia.
	* Eliminar: pulsamos sobre el botón con icono de papelera de la ganancia que queremos eliminar. Una vez hecho esto, nos aparece un mensaje de confirmación que debemos confirmar en caso que deseemos borrar la ganancia.
	* Añadir: pulsamos sobre el botón de “Añadir” y navegamos de forma automática a la pantalla de detalle de la ganancia. En ella debemos rellenar el formulario que se nos presenta y pulsar una vez finalizado, sobre el botón “Guardar”. En caso de éxito se muestra un mensaje con fondo verde y en caso contrario, un mensaje de error con fondo rojo.
	* Editar: pulsamos sobre el botón con icono de lápiz de la ganancia que queremos editar. Una vez hecho esto, navegamos de forma automática a la pantalla de detalle de la ganancia donde podemos modificar el campo de la ganancia que deseamos editar. Además, podemos añadir nuevos ingresos a la ganancia en cuestión
* Pagos (rol usuario)
	* Accedemos a la opción del menú Gastos
	* Navegamos al detalle de un gasto mediante el botón con el icono de un lápiz.
	* Dentro de la sección de “Listado de pagos” podemos:
		*Eliminar: pulsamos sobre el botón con icono de papelera del pago que queremos eliminar. Una vez hecho esto, nos aparece un mensaje de confirmación que debemos confirmar en caso que deseemos borrar el pago.
		* Añadir: pulsamos sobre el botón de “Añadir” y navegamos de forma automática a la pantalla de detalle del pago. En ella debemos rellenar el formulario que se nos presenta y pulsar una vez finalizado, sobre el botón “Guardar”. En caso de éxito se muestra un mensaje con fondo verde y en caso contrario, un mensaje de error con fondo rojo.
		* Editar: pulsamos sobre el botón con icono de lápiz del pago que queremos editar. Una vez hecho esto, navegamos de forma automática a la pantalla de detalle del pago donde podemos modificar el campo que deseemos editar.
* Ingresos (rol usuario)
	* Accedemos a la opción del menú Ganancias
	* Navegamos al detalle de una ganancia mediante el botón con el icono de un lápiz.
	* Dentro de la sección de “Listado de ingresos” podemos:
		* Eliminar: pulsamos sobre el botón con icono de papelera del ingreso que queremos eliminar. Una vez hecho esto, nos aparece un mensaje de confirmación que debemos confirmar en caso que deseemos borrar el ingreso.
		* Añadir: pulsamos sobre el botón de “Añadir” y navegamos de forma automática a la pantalla de detalle del ingreso. En ella debemos rellenar el formulario que se nos presenta y pulsar una vez finalizado, sobre el botón “Guardar”. En caso de éxito se muestra un mensaje con fondo verde y en caso contrario, un mensaje de error con fondo rojo.
		* Editar: pulsamos sobre el botón con icono de lápiz del ingreso que queremos editar. Una vez hecho esto, navegamos de forma automática a la pantalla de detalle del ingreso donde podemos modificar el campo que deseemos editar.
* Objetivos (rol usuario)
	* Accedemos a la opción del menú Objetivos
	* Búsqueda. Se pueden buscar objetivos filtrando por año.
	* Eliminar: pulsamos sobre el botón con icono de papelera del objetivo que queremos eliminar. Una vez hecho esto, nos aparece un mensaje de confirmación que debemos confirmar en caso que deseemos borrar el objetivo.
	* Añadir: pulsamos sobre el botón de “Añadir” y navegamos de forma automática a la pantalla de detalle del objetivo. En ella debemos rellenar el formulario que se nos presenta y pulsar una vez finalizado, sobre el botón “Guardar”. En caso de éxito se muestra un mensaje con fondo verde y en caso contrario, un mensaje de error con fondo rojo.
	* Editar: pulsamos sobre el botón con icono de lápiz del objetivo que queremos editar. Una vez hecho esto, navegamos de forma automática a la pantalla de detalle del objetivo donde podemos modificar el campo que deseamos editar.
* Añadir plantillas (rol usuario)
	* Accedemos a la opción del menú Plantillas.
	* Seleccionamos dentro de la sección “Creador de plantillas” la opción “Añadir plantilla”.
	* Seleccionamos un año y un mes y pulsamos sobre el botón “Añadir plantilla”
	* En caso de éxito se muestra un mensaje con fondo verde y en caso contrario, un mensaje de error con fondo rojo.
* Copiar plantillas (rol usuario)
	* Accedemos a la opción del menú Plantillas.
	* Seleccionamos dentro de la sección “Creador de plantillas” la opción “Copiar plantilla”.
	* Seleccionamos un año y un mes de una plantilla que ya exista, además del año y mes de la nueva plantilla. Una vez hecho esto, pulsamos sobre el botón “Copiar plantilla”.
	* En caso de éxito se muestra un mensaje con fondo verde y en caso contrario, un mensaje de error con fondo rojo.
* Editar plantillas (rol usuario)
	* Accedemos a la opción del menú Plantillas.
	* Eliminar plantilla: pulsamos sobre el botón con el icono de una papelera de aquella plantilla que deseemos eliminar. A continuación, nos aparece un mensaje de confirmación que debemos aceptar si queremos eliminar la plantilla.
	* Editar plantilla: pulsamos sobre el botón con el icono de un lápiz de aquella plantilla que deseamos editar. Las plantillas se organizan por años y mediante el combo “Seleccione un año” podemos elegir la plantilla que deseemos. A continuación, navegamos de forma automática a la pantalla de la plantilla donde podemos:
		* Añadir recursos a la plantilla: seleccionamos aquellas ganancias y gastos que hayamos creado dentro de la plantilla en la que nos encontremos. Una vez añadido los recursos deseados y rellenado el valor de cada uno de ellos, pulsamos sobre el botón “Guardar”. Los recursos de las plantillas podemos además marcarlos como pagados y eliminarlos de la propia plantilla pulsando sobre el botón con icono de papelera.
