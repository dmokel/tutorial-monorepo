# @data-farmer/ex-copy-static-asset-with-esbuild

copy static asset with esbuild

# Local Debug

```sh
# execut the cmd at monorepo root direcrory
pnpm run ex-copy-static-asset-with-esbuild:debug
```

# Local Debug Base Docker

```sh
# 在monorepo根目录执行
pnpm run ex-copy-static-asset-with-esbuild:build
# 构建js产物

# 继续在monorepo根目录执行
docker build -t ex-copy-static-asset-with-esbuild -f apps/ex-copy-static-asset-with-esbuild/Dockerfile apps/ex-copy-static-asset-with-esbuild
# 构建image镜像

# start
docker run \
-it \
--env SERVER_ENV=docker \
--name ex-copy-static-asset-with-esbuild ex-copy-static-asset-with-esbuild /bin/sh
```
