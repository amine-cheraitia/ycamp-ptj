FROM webdevops/php-nginx:8.3-alpine

# Installation dans votre Image du minimum pour que Docker fonctionne
RUN apk add oniguruma-dev libxml2-dev
RUN docker-php-ext-install \
        bcmath \
        ctype \
        fileinfo \
        mbstring \
        pdo_mysql \
        xml

# Installation dans votre image de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

ENV WEB_DOCUMENT_ROOT /app/public
ENV APP_ENV local
WORKDIR /app

# Cloner le dépôt Git a la place de copier le contenu en local (ATTENTION : branche "docker" a modifier plus tard)
# RUN git clone --branch docker https://github.com/amine-cheraitia/ycamp-ptj.git .
COPY . .

# Changer le répertoire de travail pour le dossier Api / a décommenter quand on passera par le clone du repository
#WORKDIR /app/Api

# Copier le fichier .env.example pour le renommer en .env
RUN cp .env.example .env

# Installation et configuration de votre site pour la production
# https://laravel.com/docs/10.x/deployment#optimizing-configuration-loading
RUN composer install --no-interaction --optimize-autoloader --no-dev
# Generate security key
RUN php artisan key:generate
# Optimizing Configuration loading
RUN php artisan config:cache
# Optimizing Route loading
RUN php artisan route:cache
# Optimizing View loading
RUN php artisan view:cache
