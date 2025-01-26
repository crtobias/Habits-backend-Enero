# Habits App - Backend
### Front : https://github.com/crtobias/Habits-native-Enero
Este es el backend de la **Habits App**, parte de un reto de 12 meses para crear una aplicación cada mes. Este mes, la idea es construir una aplicación para gestionar hábitos, con funcionalidades como la adopción y eliminación de hábitos, autenticación de usuarios, verificación de correo electrónico, recuperación de contraseña y la visualización de estadísticas sobre el progreso de los hábitos.

### Tecnologías utilizadas

- **Express**: Framework de Node.js para crear la API REST.
- **JWT (JSON Web Tokens)**: Para la autenticación de usuarios.
- **Jest**: Framework para realizar pruebas unitarias.
- **Supertest**: Librería para probar APIs.
- **MongoDB**: Base de datos NoSQL.
- **Mongo Atlas**: Servicio para gestionar bases de datos MongoDB en la nube.
- **Prisma ORM**: Herramienta para interactuar con la base de datos de manera eficiente.
- **Nodemailer**: Para el envío de correos electrónicos (como notificaciones, verificación de correo o recuperación de contraseña).

### Funcionalidades

1. **Autenticación de usuarios**: Usando JWT para permitir a los usuarios iniciar sesión y acceder a la API.
2. **Verificación de correo electrónico**: Después del registro, los usuarios deben verificar su correo electrónico a través de un enlace enviado a su correo. Esto asegura que la cuenta fue registrada con un correo válido.
3. **Recuperación de contraseña**: Los usuarios pueden recuperar su contraseña en caso de olvido. Se envía un enlace de restablecimiento a su correo electrónico.

### Variables de Entorno

Asegúrate de tener un archivo `.env` en el directorio raíz de tu proyecto con las siguientes variables de entorno:

plaintext

CopiarEditar

`DATABASE_URL=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_db>?retryWrites=true&w=majority EMAIL=<tu-email> EMAIL_PASSWORD=<tu-password> PORT=3000 JWT_SECRET=<secreto-jwt>`

#### **Descripción de las variables de entorno**:

- **DATABASE_URL**: URL de conexión a tu base de datos en Mongo Atlas.
- **EMAIL**: Dirección de correo electrónico para enviar correos (como verificación y recuperación de contraseña).
- **EMAIL_PASSWORD**: Contraseña de tu correo (si usas Gmail, habilita el acceso para aplicaciones menos seguras).
- **PORT**: El puerto en el que se ejecutará tu servidor (default: 3000).
- **JWT_SECRET**: Secreto para firmar los JWT.

### Instrucciones para ejecutar el proyecto

1. **Clonar el repositorio**

`git clone <url-del-repositorio>`

2. **Instalar dependencias**

`npm install`

3. **Iniciar el servidor**

`npm start`

El backend escuchará en el puerto definido en el archivo `.env` o el puerto por defecto `3000`.

### Endpoint Backend:

#### habits routes url/habit/
router.post("/create",createHabit) // name, goalType, userId por body
router.delete("/delete/:habitId",deleteHabit) //habit id por params
router.patch("/addTrack/:habitId",trackHabitDate) //habit id por params

##### url/users/send-email-password

recibe por body un newPassword y email y si todo esta bien envia un email de confirmacion para cambiar la contrasena
##### url/users/create

recibe por body email , name , password busca si existe y si no existe y todo esta en orden lo crea con estado pendiente y envia un mail de verificacion al email de la persona para verificar la cuenta
##### url/users/login

recibe por body email , password , name busca a la persona por email o name y ve si esta bien el password y si esta verificado el usuario , si todo esta en orden devuelve un token con id y rol
##### url/users/verify 

recibe un email por body lo busca y envia un mail para verificarlo y poder usar la cuenta
##### url/users/getUser/:id

recibe id por params y devuelve toda la informacion
