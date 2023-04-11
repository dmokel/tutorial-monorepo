# Build from project root, with:
# $ docker build -t ex-copy-static-asset-with-esbuild -f apps/ex-copy-static-asset-with-esbuild/Dockerfile apps/ex-copy-static-asset-with-esbuild

FROM node:18-alpine

WORKDIR /ex-copy-static-asset-with-esbuild

COPY ./dist .
COPY ./env ./env

CMD [ "node","./app.js" ]
