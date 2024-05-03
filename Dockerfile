
FROM node:latest AS builder

RUN mkdir -p /home/pwa-clientes
# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /home/pwa-clientes

COPY package*.json /home/pwa-clientes
RUN npm install -g
COPY . .

# Construir la aplicación
RUN npm run build 

# Usar una imagen más liviana como servidor web para servir la aplicación
FROM nginx:stable-alpine3.17-slim

# Copiar los archivos generados de la compilación de Angular a la imagen del servidor web
COPY --from=builder /home/pwa-clientes/dist/pwa-clientes/browser /usr/share/nginx/html

# Exponer el puerto 80 (puerto predeterminado de HTTP) para que la aplicación esté disponible
EXPOSE 80