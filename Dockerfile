
FROM node:20-alpine

WORKDIR /app

# Copia el archivo package.json y package-lock.json (si lo tienes)
COPY client/package*.json ./

# Instala las dependencias 
RUN npm install

# Expone el puerto
EXPOSE 5173

CMD ["npm", "run", "dev"]