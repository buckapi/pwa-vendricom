# Utilizar una imagen base específica para Node.js
FROM node:18

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y instalar las dependencias
COPY package.json .
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Comando de construcción personalizado
CMD ["npm", "run", "build"]
RUN npm start

