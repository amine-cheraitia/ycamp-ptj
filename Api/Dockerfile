FROM webdevops/php-nginx:8.3-alpine

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

COPY . .

# Copier le fichier .env.example pour le renommer en .env
RUN cp .env.example .env

RUN composer install --no-interaction --optimize-autoloader --no-dev
# Generate security key
RUN php artisan key:generate
# Optimizing Configuration loading
RUN php artisan config:cache
# Optimizing Route loading
RUN php artisan route:cache
# Optimizing View loading
RUN php artisan view:cache
