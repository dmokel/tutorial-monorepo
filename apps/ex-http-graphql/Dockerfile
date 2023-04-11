# Build from project root, with:
# $ docker build -t ex-http-graphql -f apps/ex-http-graphql/Dockerfile apps/ex-http-graphql

FROM node:18-alpine

WORKDIR /ex-http-graphql

COPY ./dist .
COPY ./env ./env

EXPOSE 7778

CMD [ "node","./app.js" ]
