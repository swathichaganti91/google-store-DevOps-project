FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Only copy index.html
COPY index.html /usr/share/nginx/html/

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
