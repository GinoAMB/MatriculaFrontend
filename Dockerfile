# Usa una imagen oficial de Node.js versión 20 basada en Alpine Linux
# Alpine es una distribución muy ligera, ideal para contenedores
FROM node:20-alpine

# Define el directorio de trabajo dentro del contenedor
# Todo lo que hagamos después ocurrirá dentro de /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si existe)
# Esto permite instalar dependencias antes de copiar todo el proyecto
# y aprovechar la caché de Docker
COPY package*.json ./

# Instala las dependencias del proyecto
# Aquí se descargan React, Vite, TypeScript, etc.
RUN npm install

# Instala globalmente "serve"
# Este paquete servirá los archivos estáticos generados en /dist
RUN npm i -g serve

# Copia todo el contenido del proyecto al contenedor
# Incluye src, public, vite.config, tsconfig, etc.
COPY . .

# Compila el proyecto para producción
# En Vite esto genera la carpeta /dist
RUN npm run build

# Expone el puerto 3000 para acceder a la app desde fuera del contenedor
EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor
# "serve" levanta un servidor web para mostrar la carpeta dist
# -s = modo SPA (redirige rutas al index.html)
# -l = puerto donde escuchará
CMD ["serve", "-s", "dist", "-l", "3000"]