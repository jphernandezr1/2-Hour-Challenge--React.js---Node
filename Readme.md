# Decisiones de diseño:
- El único valor hard encode o quemado es ISBN, ya que este por más de que este en otro Idioma no cambiara sus valores.
- se dejó un login similar al propuesto, estéticamente se crearon funciones como recordarme, olvide contraseña, y crear cuenta, sin embargo estos no son funcionales y solo devuelven a la misma pagina
- se retornar los posibles errores al iniciar sesión, si se inicia correctamente o no, si la contraseña es correcta o no y/o si el formato lo es.
- se creó un validador de que se escriba @ y un formato de correo.
- Se creo un botón con el fin de cerrar sesión, este botón redirige a iniciar sesión nuevamente.
- Se internacionalizo la aplicación correctamente, a excepción de todos los valores que nos arroja el back.
- Se utilizo Tailwind principalmente, sin embargo se usa Bootstrap en algunas ocasiones y CSS.
- Se agrego al detalle del libro el rol del usuario actual con el fin de que el usuario pueda ver si puede editar los datos.
- Se creo un text area editable para el administrador, con el fin de que este sea un campo el cual pueda hacer scrolldown y que no consuma gran espacio.
# Componentes Creados:
## Post-Books.jsx: 
Componente encargado de crear una card y ordenar estas cards con la información básica del libro que contiene una foto, un título y un ISBN.
## Post-Booksinfo.jsx: 
Componente encargado de crear una card para la información relacionada a un libro después de seleccionarlo y ordenar estas cards con la información del libro que contiene un nombre, un ISBN, autor, publicador, genero, año, disponibilidad, precio y resumen.
## Card.css: 
archivo CSS con algunas configuraciones usadas en las cards.
## BookPage.jsx:
componente que representa la página que obtiene toda la información de los libros y hace una solicitud de creación de una card a Post-Books.jsx, por cada libro que recibe, estas las presenta en orden de entrada del back.
## BookPage.jsx:
componente que representa la página que obtiene toda la información de un libro y hace una solicitud de creación de una card a Post-Booksinfo.jsx, por el libro recibido, el cual es previamente seleccionado por el usuario, si no selecciona una, se escoge por defecto el primero, el resultado es una card con la información del libro, dependiendo el rol es editable o no.
## Landing.jsx:
esta página se encarga de crear un layout, en el cual se pueda tener todos los libros y la información de uno solo, de tal forma que permite crear dos card, que provienen de diferentes componentes en solo un componente.
## LoginPage.jsx: 
Componente que se encarga de iniciar sesión, se creó según el modelo propuesto en el documento, este se encarga de iniciar sesión y asignar el rol, con el fin de asegurar la seguridad este rol solo se guardara en la sesión actual, tan pronto acabe ya no sera guardado, en este también se muestran unas opciones no funcionales, las cuales son olvide la contraseña, crear cuenta, etc.
# Proceso para ejecutar la aplicación:
1. Primero se debe clonar el repositorio.
2. Tan pronto se clone el repositorio se debe acceder a la carpeta parcial2, usando cd parcial2.
3. En este punto, teniendo en cuenta que se tiene instalado nest, node, react, etc, se procede a hacer npm i, esto se encargara de instalar los módulos necesarios, sin embargo es posible que la aplicación no encuentre ciertos módulos y deberá instalarlos externamente, estos suelen ser: tailwind, react-intl, axios, react-dom, estos es posible instarlos escribiendo npm install _____ en donde en el espacio se usara el módulo faltante como lo indique la consola al hacer npm start.
4. Al haber instalado las dependencias correctamente podemos ejecutar el comando npm run start o npm start, ya con esto, y con el back funcionando correctamente podemos iniciar la aplicación usando la ruta localhost:3000/
5. de esta forma se enviara a iniciar sesión y se mostraran los endpoints solicitados.
6. La aplicación indicara que se ejecutó correctamente.

# Componentes y elementos externos al ambiente nativo de react:
- React-intl: nos permite internacionalizar la aplicación.
- Tailwind: nos permite crear componentes gráficos más fácil, es un CSS compuesto y tipado de forma diferente.
- Bootstrap: nos sirve para crear componentes que serán gráficos.
- Axios: nos permite hacer las consultas y traer la información del back.
- React-Dom: Nos permite generar y cambiar los estados, contiene UseState y SetState.
