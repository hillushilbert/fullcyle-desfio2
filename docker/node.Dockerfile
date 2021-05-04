FROM node:10
MAINTAINER Hillus Hilbert
ENV NODE_ENV=development
COPY ./app /var/www/app
WORKDIR /var/www/app
RUN npm install 

RUN apt-get update && apt-get install -y wget \
    && npm install -g nodemon

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# ENTRYPOINT ["npm", "start"]
EXPOSE 3000