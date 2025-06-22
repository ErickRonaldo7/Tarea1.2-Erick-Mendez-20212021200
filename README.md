# Erick Mendez - 20212021200
# 🛍️ API de Productos

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un catálogo de productos. Está construida con Node.js y Express.

---

## 📦 Instrucciones para instalar las dependencias

### 🌐 Desde el navegador web

1. Instalar Node.js desde: [https://nodejs.org/en](https://nodejs.org/en)
2. Verificar la instalación ejecutando en CMD o terminal de Visual Studio Code:
```bash
node -v
```
 

### 💻 Desde la terminal de Visual Studio Code

1. Instalar dependencias del proyecto:
```bash
npm install
```


2. Instalar Express:
```bash
npm install express
```

### 🧪 Cliente para pruebas

- Utilizar extensión **REST Client** de Visual Studio Code  
  o la aplicación **Postman** para probar los endpoints.

---

## ▶️ Ejecución de la API

1. Abre la terminal en Visual Studio Code con:
   Ctrl + J , o asegurandote de estar posicionado correctamente antes de ejecutar el servidor.
   

2. Ejecutar el servidor:
```bash
node index.js
```

---

## 📌 Rutas disponibles y su funcionalidad

### 🔍 Obtener todos los productos

- **Ruta:** GET /productos
- **Controlador:** productsRouter.get('/', getAllProducts)
- **Ejemplo:** GET http://localhost:3000/productos

  

---

### ✅ Obtener productos disponibles

- **Ruta:** GET /productos/disponibles
- **Controlador:** productsRouter.get('/disponibles', productosDisponibles)
- **Ejemplo:** GET http://localhost:3000/productos/disponibles
  

---

### 🔎 Obtener producto por ID

- **Ruta:** GET /productos/:id
- **Controlador:** productsRouter.get('/:id', obtenerPorID)
- **Ejemplo:** GET http://localhost:3000/productos/1
 

---

### ➕ Crear un nuevo producto

- **Ruta:** POST /productos
- **Controlador:** productsRouter.post('/', crearProducto)
- **Headers:**
  ```bash
  Content-Type: application/json
  ```
  
- **Body de ejemplo:**
  ```bash
  {
    "id": 4,
    "nombre": "Impresora Multifuncional",
    "precio": 1500,
    "descripcion": "Impresora Multifuncional de alta calidad",
    "disponible": true,
    "fecha_ingreso": "21/06/2025"
  }
  ```

---

### ✏️ Actualizar un producto por ID

- **Ruta:** PUT /productos/:id
- **Controlador:** productsRouter.put('/:id', actualizarProducto)
- **Headers:**
  ```bash
  Content-Type: application/json
  ```
- **Body de ejemplo:**
  ```bash
  {
    "nombre": "Impresora Multifuncional multicolor",
    "precio": 1250,
    "descripcion": "Impresora Multifuncional multicolor de alta calidad",
    "disponible": true,
    "fecha_ingreso": "21/10/2025"
  }
  ```

---

### ❌ Eliminar un producto por ID

- **Ruta:** DELETE /productos/:id
- **Controlador:** productsRouter.delete('/:id', eliminarProducto)
- **Ejemplo:** DELETE http://localhost:3000/productos/4
  

---

## 🛠 Tecnologías utilizadas

- Node.js
- Express.js
- REST Client / Postman



