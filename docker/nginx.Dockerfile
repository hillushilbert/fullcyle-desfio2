FROM nginx:latest
MAINTAINER Hillus Hilbert
# COPY /public /var/www/public
# COPY /docker-compose/nginx /etc/nginx/
# RUN chmod 755 -R /var/www/public
EXPOSE 80 443
ENTRYPOINT ["nginx"]
# Parametros extras para o entrypoint
CMD ["-g", "daemon off;"]