# Utiliser l'image Node.js officielle pour construire l'application
FROM node:20 as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances Node.js
RUN npm install

#RUN git clone --branch docker https://github.com/amine-cheraitia/ycamp-ptj.git .
# Copier le reste des fichiers de l'application React
COPY . .

# Construire l'application React pour la production
RUN npm run build

# Utiliser une image Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers de build dans le dossier par défaut de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]