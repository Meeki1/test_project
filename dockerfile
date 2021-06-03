FROM node:8.16.0-alpine

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm
WORKDIR /opt
COPY . .
RUN cd ./test_project && \
    npm install

WORKDIR /opt/test_project

EXPOSE 8080
EXPOSE 8081

CMD ["node", "server.js"]