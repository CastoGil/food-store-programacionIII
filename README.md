# Food Store - Evaluación 1 Programación III

## Descripción

Food Store es una aplicación frontend desarrollada con HTML, CSS, JavaScript y TypeScript.

El proyecto permite visualizar un catálogo de productos, realizar búsquedas por nombre, filtrar productos por categoría y agregar productos a un carrito de compras.

El carrito utiliza `localStorage` para mantener los productos agregados y sus cantidades, incluso al recargar la página.

La aplicación fue desarrollada utilizando Vite como entorno de desarrollo y pnpm como gestor de paquetes.

## Funcionalidades

- Registro e inicio de sesión de usuarios.
- Zona de cliente.
- Catálogo de productos generado dinámicamente.
- Visualización de imágenes de los productos.
- Búsqueda de productos por nombre.
- Filtrado de productos por categoría.
- Identificación visual de la categoría seleccionada.
- Opción para volver a visualizar todos los productos.
- Al realizar una búsqueda se vuelve automáticamente al catálogo completo.
- Visualización de productos disponibles y sin stock.
- Agregado de productos al carrito.
- Persistencia del carrito mediante `localStorage`.
- Actualización automática de la cantidad cuando se agrega nuevamente un producto existente.
- Indicador de cantidad de productos en el carrito.
- Vista del carrito con imagen, nombre, precio y cantidad de cada producto.
- Incremento y disminución de cantidades desde el carrito.
- Cálculo de subtotales.
- Cálculo del total general del carrito.
- Mensaje cuando el carrito se encuentra vacío.
- Navegación entre catálogo, carrito y zona de cliente.
- Diseño responsive.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- TypeScript
- Vite
- localStorage
- pnpm

```markdown
## Video de presentación

Video correspondiente a la presentación de la Evaluación 1 de Programación III.

Enlace al video:

https://youtu.be/Q6OflMvvyD4

## Instalación y ejecución

### 1. Instalar las dependencias

Abrir una terminal en la carpeta raíz del proyecto y ejecutar:

```bash
pnpm install
```

### 2. Iniciar el servidor de desarrollo

Ejecutar:

```bash
pnpm dev
```

### 3. Abrir la aplicación

Vite mostrará en la terminal la dirección donde se está ejecutando el proyecto.

Normalmente:

```text
http://localhost:5173
```

Abrir esa dirección en el navegador.

## Compilar el proyecto

Para generar la versión de producción ejecutar:

```bash
pnpm build
```

Si la compilación se realiza correctamente, Vite generará la carpeta `dist`.

## Estructura principal del proyecto

```text
src/
├── assets/
│   └── img/
├── data/
│   └── data.ts
├── pages/
│   ├── admin/
│   ├── auth/
│   │   ├── login/
│   │   └── registro/
│   └── client/
│       ├── home/
│       │   ├── home.html
│       │   └── home.ts
│       ├── cart/
│       │   ├── cart.html
│       │   └── cart.ts
│       ├── client.html
│       └── client.ts
├── types/
│   ├── IUser.ts
│   ├── Rol.ts
│   ├── categoria.ts
│   └── product.ts
├── utils/
│   ├── auth.ts
│   ├── navigate.ts
│   ├── cart.ts
│   └── productImages.ts
├── main.ts
└── style.css
```

## Organización de la evaluación

### Catálogo

La vista principal del catálogo se encuentra en:

```text
src/pages/client/home/
```

`home.ts` se encarga de:

- Renderizar los productos dinámicamente.
- Renderizar las categorías.
- Buscar productos por nombre.
- Filtrar productos por categoría.
- Identificar visualmente la categoría seleccionada.
- Agregar productos al carrito.
- Actualizar el indicador de cantidad del carrito.

### Carrito

La vista del carrito se encuentra en:

```text
src/pages/client/cart/
```

`cart.ts` se encarga de:

- Mostrar los productos guardados.
- Mostrar nombre, imagen, precio y cantidad.
- Modificar las cantidades.
- Mostrar los subtotales.
- Mostrar el total general.
- Actualizar el indicador del carrito.
- Mostrar un mensaje cuando el carrito está vacío.

### Lógica del carrito

La lógica reutilizable del carrito se encuentra en:

```text
src/utils/cart.ts
```

En este archivo se realizan operaciones como:

- Obtener el carrito desde `localStorage`.
- Agregar productos.
- Actualizar cantidades.
- Calcular la cantidad total de productos.
- Calcular el total del carrito.

El carrito utiliza la clave:

```text
cart
```

en `localStorage`.

### Imágenes de productos

Las imágenes utilizadas por los productos se encuentran en:

```text
src/assets/img/
```

La resolución de las imágenes utilizadas por el catálogo y el carrito se centraliza en:

```text
src/utils/productImages.ts
```

## Datos

Los productos y categorías se encuentran centralizados en:

```text
src/data/data.ts
```

El archivo contiene:

- La constante `PRODUCTS`.
- La función `getCategories()`.

Los productos se encuentran tipados mediante las interfaces definidas en:

```text
src/types/product.ts
```

En este archivo se encuentran:

- `IProduct`
- `ICartItem`

Las categorías se encuentran tipadas mediante:

```text
src/types/categoria.ts
```

donde se encuentra la interfaz:

```text
ICategoria
```

## Persistencia

La aplicación utiliza `localStorage` para almacenar información en el navegador.

Para el carrito se utiliza la clave:

```text
cart
```

Esto permite que los productos y sus cantidades permanezcan almacenados incluso después de recargar la página.


## Autor

Casto Gil  
Tecnicatura Universitaria en Programación - UTN  
Programación III