//--

CLASE NUMERO 2

Archivos instalados !!!



.editorconfig es para indicar la configuracion de nuestro editor, de esta manera, quien quiera trabajar en el proyecto, sabe que configuracion es la necesaria.




.gitignore evita que subamos archivos sensibles a la nube de git


ESLint es una herramienta de linting para JavaScript que ayuda a identificar y reportar patrones problemáticos o errores en el código. El propósito principal de ESLint es mantener un código limpio, legible y libre de errores en proyectos JavaScript.


Instale dependencias de desarrollo de produccion


--// 





//--
  Clase Numero 3

  Hicimos el despliegue del servidor en el puerto 3000. Hay conceptos que fueron aclarados que detallaré a continuación.

A grandes rasgos, así es como funciona Express en el caso de una llamada GET en tu código:

1. Al ejecutar `const app = express();`, se crea una instancia de la aplicación Express.

2. Luego, utilizas `app.get('/', (req, res) => { ... })` para definir una ruta para la URL raíz ("/") y especificas una función de devolución de llamada para manejar las solicitudes GET a esa ruta.

3. Cuando se recibe una solicitud GET en el servidor Express, Express analiza la solicitud entrante y compara la ruta solicitada con las rutas definidas en tu código.

4. Si la ruta de la solicitud coincide con la ruta definida en `app.get('/', ...)` (en este caso, la raíz "/"), Express ejecuta la función de devolución de llamada proporcionada como segundo argumento.

5. Dentro de la función de devolución de llamada `(req, res) => { ... }`, puedes escribir la lógica para manejar la solicitud. Tienes acceso al objeto de solicitud (`req`) y al objeto de respuesta (`res`), que te permiten acceder a los datos de la solicitud y enviar una respuesta al cliente.

6. En tu caso, la función de devolución de llamada simplemente utiliza `res.send('Hello World, this is my server')` para enviar la cadena "Hello World, this is my server" como respuesta al cliente.

7. Express toma la respuesta generada por la función de devolución de llamada y la envía al cliente como la respuesta a la solicitud GET.

En resumen, Express actúa como un enrutador que analiza las solicitudes entrantes y las dirige a las funciones de devolución de llamada correspondientes basadas en la ruta y el método de solicitud. Cuando se recibe una solicitud GET a la ruta especificada, Express ejecuta la función de devolución de llamada correspondiente y envía la respuesta generada al cliente.
  
--//



//-- 
CLASE 4
  GET, PUT, POST y DELETE
  
  GET es para obtener cierta informacion. Puede ser de muchos o de algo en especifico.
  POST es para crear un elemento nuevo.
  PUT es para modificar un elemento en particular. Por lo general se le indica el ID del elemento.
  PATCH es para actualizar parcialmente
  DELETE es para eliminar un elemento.
  


//--


//-- Clase 8
Instale una libreria faker. Esta nos sirve para poblar de datos al servidor.
Aprendimos sobre el uso de query(consulta). Es otra forma de obtener datos sobre la paginacion. Viene con la request hacia el servidor, es decir, req.query, en vez de req.params. El query puede tener diferente estructura, por lo cual en el codigo usamos condicionales. Si es que viene con query, usamos el dato y paginamos con esto. Sino, por defecto lo pagina de un modo que nosotros consideremos.
Usamos de ejemplo como cargar un array dinamicamente. Esto nos ayuda a poblar de datos el servidor con el modulo fake-js.

Tambien trabajamos con endpoints filters, y que sucede cuando chocan dos endpoints. Solo debemos poner los filters o endpoints que queremos que sean exclusivos, antes que los demas endpoints. Entonces tendra prioridad el filter.


//-- Clase 13
  En las peticiones REST, los números de estado son códigos numéricos que indican el resultado de una solicitud HTTP. Estos códigos se conocen como códigos de estado HTTP o códigos de respuesta HTTP. Cada código de estado tiene un significado específico y proporciona información sobre el estado de la solicitud realizada por el cliente. Aquí tienes algunos ejemplos de los códigos de estado más comunes:

1. 200 OK: Este código de estado indica que la solicitud se ha realizado correctamente y que la respuesta contiene los datos solicitados. Es el código de estado más común para respuestas exitosas.

2. 201 Created: Se utiliza para indicar que una nueva entidad ha sido creada exitosamente. Por ejemplo, cuando se realiza una solicitud POST para crear un nuevo recurso en el servidor, el código de estado 201 se utiliza para indicar que la creación se ha realizado correctamente.

3. 204 No Content: Este código se utiliza para indicar que la solicitud se ha procesado correctamente, pero no se devuelve ningún contenido en la respuesta. Es comúnmente utilizado para solicitudes que realizan modificaciones en el servidor sin devolver datos adicionales.

4. 400 Bad Request: Indica que la solicitud realizada por el cliente es incorrecta o no se puede procesar por parte del servidor debido a un error del cliente, como una sintaxis incorrecta en los parámetros de la solicitud.

5. 401 Unauthorized: Se utiliza para indicar que la solicitud no ha sido autenticada o no se han proporcionado credenciales válidas. Es comúnmente utilizado cuando se requiere autenticación para acceder a un recurso.

6. 403 Forbidden: Indica que el servidor ha entendido la solicitud, pero se niega a cumplirla. Esto puede deberse a que el cliente no tiene los permisos necesarios para acceder al recurso solicitado.

7. 404 Not Found: Indica que el recurso solicitado no se ha encontrado en el servidor. Es comúnmente utilizado cuando se intenta acceder a una URL que no existe.

8. 500 Internal Server Error: Se utiliza para indicar que se ha producido un error interno en el servidor al procesar la solicitud. Este código de estado generalmente indica un problema en el servidor y no en el cliente.

Estos son solo algunos ejemplos de los códigos de estado HTTP más comunes. Existen muchos otros códigos de estado que se utilizan para cubrir diferentes escenarios y situaciones en las respuestas de las solicitudes REST. Cada código de estado proporciona información adicional sobre el resultado de la solicitud y ayuda a los clientes a comprender el estado de la respuesta recibida.

//--





//--
Clase numero 16 - Manejo de asincronia en funciones API
A los metodos del objeto producto, le agrego la palabra reservada async para tratarlas como asincronas.
ejemplo: async find(). Entonces no devolera los datos puros, sino que devolvera la promesa. 
En el router de products, tambien agrego la palabra reservada async, porque estas funciones donde recibo "async (req, res)" es asincrona. En las devoluciones de las constantes que contienen el valor de las funciones asincronas, va la palabra reservada await (Ej: const newProduc = await service.send(200).create(body))



//--Clase numero 17 - Middlewares, que son?

En el contexto de Express, un middleware es una función que se ejecuta entre la recepción de una solicitud HTTP y el envío de una respuesta. Actúa como una capa intermedia que procesa la solicitud antes de que llegue a las rutas finales o después de que se haya generado una respuesta.

Los middlewares en Express tienen varias utilidades y se utilizan para realizar diversas tareas, algunas de las cuales incluyen:

1. Procesamiento de solicitudes: Los middlewares pueden realizar tareas de procesamiento en las solicitudes entrantes, como analizar y manipular datos en el cuerpo de la solicitud, realizar validaciones, autenticar usuarios, verificar permisos, etc. Esto permite realizar operaciones comunes en un lugar centralizado antes de que la solicitud llegue a la ruta correspondiente.

2. Manipulación de respuestas: Los middlewares también pueden modificar o agregar datos a las respuestas antes de que sean enviadas al cliente. Esto puede incluir el formato de los datos de respuesta, el establecimiento de encabezados HTTP personalizados, la compresión de la respuesta, etc.

3. Gestión de errores: Los middlewares pueden capturar y manejar errores en la aplicación. Pueden ser utilizados para centralizar el manejo de errores y proporcionar respuestas consistentes al cliente en caso de que ocurra un error durante el procesamiento de una solicitud.

4. Logging y seguimiento: Los middlewares pueden registrar información detallada sobre las solicitudes entrantes y salientes, como registrar los detalles de la solicitud, los parámetros, los encabezados y las respuestas generadas. Esto es útil para el seguimiento y análisis de la actividad de la aplicación, el monitoreo de errores y el análisis de rendimiento.

5. Gestión de sesiones: Los middlewares también se utilizan para administrar las sesiones de los usuarios en una aplicación web. Pueden almacenar y leer datos relacionados con la sesión, como la información de inicio de sesión, en cada solicitud para mantener la persistencia del estado del usuario.

Express proporciona una interfaz flexible para crear y utilizar middlewares. Los middlewares se pueden agregar a una aplicación utilizando el método `use()` y se ejecutan en orden secuencial. También se pueden aplicar a rutas específicas o grupos de rutas utilizando el método `use()` o `all()` en un enrutador.

En resumen, los middlewares en Express son funciones que se utilizan para procesar, modificar y gestionar solicitudes y respuestas HTTP en una aplicación. Proporcionan una forma poderosa de agregar funcionalidad adicional, mejorar la modularidad del código y mantener la claridad y organización en el manejo de las solicitudes en una aplicación Express.





Son funciones intermedias, que permite realizar alguna tarea antes de ser enviado el dato a procesar.

Uses Cases: 
  Funcionar como pipes
  Validar datos
  Capturar errores
  Validar permisos
  Controlar accesos





  //--- Prueba de commit con ssh a github



Recomendaciones para producción:
CORS
HTTPS
PROCESOS DE BUILD
REMOVER LOGS
SEGURIDAD (HELMET) - MIDDLEWARES PARA SEGURIDAD
TESTING
