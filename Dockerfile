
FROM node:latest AS builder

RUN mkdir -p /home/vendricom
# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /home/vendricom

COPY package*.json /home/vendricom
RUN npm install -g
COPY . .

# Construir la aplicación
RUN npm ng build 

# Usar una imagen más liviana como servidor web para servir la aplicación
FROM nginx:stable-alpine3.17-slim

# Copiar los archivos generados de la compilación de Angular a la imagen del servidor web
COPY --from=builder /home/vendricom/dist/vendricom/browser /usr/share/nginx/html

# Exponer el puerto 80 (puerto predeterminado de HTTP) para que la aplicación esté disponible
EXPOSE 80