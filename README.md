# proyectoNode


En mi proyecto intervienen las siguientes capas, de cuales por cada una tendremo una carpeta y en las cuales tendremos diferentes archivos. 

-Models : es la capa donde tendremos los modelos que seran representaran en la BD.En este caso se representan los modelos en boock.js ,
libraries.js y user.js
   
-controllers : el la capa  la cual es quien solicita y conoce a quien pedir los recursos que necesita, en una palabra es como 
el intermediario.En cada controlador, se realizan operaciones correspondientes a la base de datos, como consultar, 
actualizar o eliminar registros, y se manejan los errores que puedan ocurrir durante estas operaciones.
    .librariesController:tiene metodos para mostrar todas las librerías, mostrar una librería por su id, actualizar una librería
      y eliminar una librería de manera lógica.
    .boockcontroller: para realizar acciones parecidas al anterior pero con los libros.
    .loguinController:creado para poder realizar las acciones correspondientes al loguin.
    .userController: para manejar los usuarios de la aplicacion
    .
-routes: es la capa que conoce la ruta de cada recurso que vamos a necesitar, y dentro de la carpeta routes se crean
archivos que los archivos que contienen las rutas a estos recursos.

-middleware: son las funciones y servicios comunes que vamos a utilizar en el proyecto.

-config:es la capa de configuración en este proyecto tenemos la configuración de la BD .

Luego se crea un par de archivos mas , fuera de las capas mensionadas anteriormente

_index.js: es el archivo desde el cual ejecutaremos nuestra aplicacion, ademas sirve tambien para terminar de realizar algunas 
configuraciones.
_ .env : donde se asigna valores, por ejemplo entre otras cosas al puerto en donde se ejecutara nuestra aplcacion.
_request: carpeta en donde guardare las resquest modelos que se le puede enviar a la aplicacion, que pueden ser ejecutadas
en el mismo editor de visual studio por ejemplo.

