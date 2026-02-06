# Gestión de Clientes

Aplicación web CRUD desarrollada con **HTML, CSS y JavaScript Vanilla (sin frameworks)** para la gestión de clientes.

Permite registrar, visualizar, editar y eliminar clientes, almacenando la información en el navegador mediante **LocalStorage**.

---

##  Funcionalidades

### Registro de clientes
- Nombre
- Cédula (única)
- Sexo (radio buttons)
- Activo (checkbox)
- Contraseña con validación segura
- Correo (único)
- Edad
- Barrio

### Validaciones
- Campos obligatorios
- Contraseña:
  - mínimo 8 caracteres
  - 1 mayúscula
  - 1 número
- Cédula no duplicada
- Correo no duplicado
- Mensajes de error inline (sin alert)

### CRUD completo
- Crear cliente
- Listar clientes en tabla
- Editar cliente
- Eliminar cliente

### Persistencia de datos
- Uso de **LocalStorage**
- Los datos permanecen al recargar la página

### Responsive
- Diseño adaptable a móviles y escritorio
- Layout con CSS Grid
- Unidades en rem para mejor escalabilidad

---

## Tecnologías utilizadas

- HTML5
- CSS3 
- JavaScript ES6
- LocalStorage API

> No se usaron frameworks ni librerías externas

---

##  Arquitectura

### data.js
Manejo de almacenamiento:
- obtenerClientes()
- guardarClientes()
- agregarCliente()
- eliminarCliente()

### ui.js
Interfaz:
- renderClientes()
- editarCliente()
- eliminarClienteUI()

### app.js
Lógica:
- validaciones
- control del formulario
- modo crear / editar
- manejo de errores

---


## Posibles mejoras futuras

- API REST con backend (Node o Python)
- Base de datos real (MySQL/PostgreSQL)
- Búsqueda y filtros
- Paginación
- Exportar a Excel/CSV
- Autenticación de usuarios

---

## Autor

Jenifer Andrea Meriño Bolívar  
Proyecto realizado como prueba técnica.


