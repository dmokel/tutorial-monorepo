# @data-farmer/ex-http-graphql

example

# Environment Variable

# Service Domain

- 需要公网域名

```sh
dev :
pre :
prod :
```

- 需要内网域名

```sh
dev :
pre :
pord :
```

# Initialization

```sh
# create mongodb indexes manually
```

# Service or Component Dependencies

# Local Debug

```sh
# execut the cmd at monorepo root direcrory
pnpm run ex-http-graphql:debug
```

# Local Debug Base Docker

```sh
# 在monorepo根目录执行
pnpm run ex-http-graphql:build
# 构建js产物

# 继续在monorepo根目录执行
docker build -t ex-http-graphql -f apps/ex-http-graphql/Dockerfile apps/ex-http-graphql
# 构建image镜像

# start
docker run \
-p 7778:7778 \
# --network ex-http-graphql_local \
# --env SERVER_ENV=docker \
--name ex-http-graphql ex-http-graphql
```
