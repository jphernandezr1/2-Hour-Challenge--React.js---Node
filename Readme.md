Decisiones de diseño:
- El unico valor hard encode o quemado es ISBN, ya que este por mas de que este en otro Idioma no cambiara sus valores.
- se dejo un login similar al propuesto, esteticamente se crearon funciones como recordarme, olvide contraseña, y crear cuenta, sin embargo estos no son funcionales y solo devuelven a la misma pagina
- se retornar los posibles errores al iniciar sesion, si se inicia correctamente o no, si la contraseña es correcta o no y/o si el formato lo es.
- se creo un validador de que se escriba @ y un formato de correo.
- Se creo un boton con el fin de cerrar sesion, este boton redirige a inciar sesion nuevamente.
- Se internacionalizo la aplicacion correctamente, a excepcion de todos los valores que nos arroja el back.
- Se utilizo Tailwind principalmente, sin embargo se usa Bootstrap en algunas ocasiones y CSS.
- Se agrego al detalle del libro el rol del usuario actual con el fin de que el usuario pueda ver si puede editar los datos.
- Se creo un text area editable para el administrador, con el fin de que este sea un campo el cual pueda hacer scrolldown y que no consuma gran espacio.
Componentes Creados:
-Post-Books.jsx: Componente encargado de crear una card y ordenar estas cards con la informacion basica del libro que contiene una foto, un titulo y un ISBN.
- Post-Booksinfo.jsx: Componente encargado de crear una card para la informacion relacionada a un libro despues de seleccionarlo y ordenar estas cards con la informacion del libro que contiene un nombre, un ISBN, autor, publicador, genero, año, disponibilidad, precio y resumen.
- Card.css: archivo CSS con algunas configuraciones usadas en las cards.
- BookPage.jsx, componente que representa la pagina que obtiene toda la informacion de los libros y hace una solicitud de creacion de una card a Post-Books.jsx, por cada libro que recibe, estas las presenta en orden de entrada del back.
- BookPage.jsx, componente que representa la pagina que obtiene toda la informacion de un libro y hace una solicitud de creacion de una card a Post-Booksinfo.jsx, por el libro recibido, el cual es previamente seleccionado por el usuario, si no selecciona una, se escoge por defecto el primero, el resultado es una card con la informacion del libro, dependiendo el rol es editable o no.
- Landing.jsx, esta pagina se encarga de crear un layout, en el cual se pueda tener todos los libros y la informacion de uno solo, de tal forma que permite crear dos card, que provienen de diferentes componentes en solo un componente.
- LoginPage.jsx: Componente que se encarga de iniciar sesion, se creo segun el modelo propuesto en el documento, este se encarga de iniciar sesion y asignar el rol, con el fin de asegurar la seguridad este rol solo se guardara en la sesion actual, tan pronto acabe ya no sera guardado, en este tambien se muestran unas opciones no funcionales, las cuales son olvide la contraseña, crear cuenta, etc.
Proceso para ejecutar la aplicacion:
1. Primero se debe clonar el repositorio.
2. Tan pronto se clone el repositorio se debe acceder a la carpeta parcial2, usando cd parcial2.
3. En este punto, teniendo en cuenta que se tiene instalado nest, node, react, etc, se procede a hacer npm i, esto se encargara de instalar los modulos necesarios, sin embargo es posible que la aplicacion no encuentre ciertos modulos y debera instalarlos externamente, estos suelen ser: tailwind, react-intl, axios, react-dom, estos es posible instarlos escribiendo npm install _____ en donde en el espacio se usara el modulo faltante como lo indique la consola al hacer npm start.
4. Al haber instalado las dependencias correctamente podemos ejecutar el comando npm run start o npm start, ya con esto, y con el back funcionando correctamente podemos iniciar la aplicacion usando la ruta localhost:3000/
5. de esta forma se enviara a iniciar sesion y se mostraran los endpoints solicitados.
6. La aplicacion indicara que se ejecuto correctamente.
