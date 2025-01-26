# Habits App - Backend

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

Endpoints Backend
Habit Routes
POST /habit/create
Crea un nuevo hábito.
Body:

json
{
  "name": "string",
  "goalType": "string",
  "userId": "string"
}
DELETE /habit/delete/:habitId
Elimina un hábito.
Params:

habitId (ID del hábito a eliminar).
PATCH /habit/addTrack/:habitId
Agrega un nuevo seguimiento a un hábito.
Params:

habitId (ID del hábito a actualizar).
User Routes
POST /users/send-email-password
Recibe un correo y una nueva contraseña, y envía un correo de confirmación para cambiar la contraseña.
Body:

json
{
  "email": "string",
  "newPassword": "string"
}
POST /users/create
Crea un nuevo usuario.
Busca si el correo ya existe y, si no, crea el usuario con el estado "pendiente" y envía un correo de verificación.
Body:

json
{
  "email": "string",
  "name": "string",
  "password": "string"
}
POST /users/login
Inicia sesión del usuario.
Busca al usuario por correo o nombre, verifica la contraseña y comprueba si está verificado. Si todo está correcto, devuelve un token con el ID y rol del usuario.
Body:

json
{
  "email": "string",
  "password": "string"
}
POST /users/verify
Envía un correo de verificación para activar la cuenta del usuario.
Body:

json
Copiar
Editar
{
  "email": "string"
}
GET /users/getUser/:id
Obtiene la información de un usuario por su ID.
Params:

id (ID del usuario).
