# @data-farmer/monorepo

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

```sh
# 你应该通过pnpm run cz来创建规范化的commit-msg，
# 如果你的commit-msg不符合规范，那么你的commit将被中断。

# 在根目录执行
pnpm run cz
```

```sh
# 关于如何在本monorepo进行开发
#
# 当你第一次 clone 该 monorepo 工程到本地时，你需要通过 pnpm 安装依赖，
# 首先你需要在 monorepo 根目录执行
pnpm install
# 安装monorepo root依赖，请注意，此时你还未安装各个apps/packages的依赖，
# 因此你需要继续执行相关命令安装apps/pakcages的依赖，格式如下：
pnpm --filter @data-farmer/{APP_NAME} install
# 示例如：pnpm --filter @data-farmer/ex-http-graphql install

# 你可以仅对你进行开发的apps/packages安装依赖，
# 从而减少你本地所需要安装的依赖，和减少安装依赖所需的时间。
```

# @data-farmer/ex-http-graphql

```sh
# 需要pnpm支持，通过
npm install -g pnpm@7.29.3
# 安装

# 在monorepo根目录执行
pnpm install
# 安装monorepo root依赖

# 然后执行
pnpm --filter @data-farmer/ex-http-graphql install
# 安装ex-http-graphql项目的依赖

# 在monorepo根目录执行
pnpm run ex-http-graphql:build
# 构建js产物

# 继续在monorepo根目录执行
docker build -t ex-http-graphql -f apps/ex-http-graphql/Dockerfile apps/ex-http-graphql
# 构建image镜像
```

获取更多[@data-farmer/ex-http-graphql](./apps/ex-http-graphql/README.md) 的信息

# @data-farmer/ex-copy-static-asset-with-esbuild

```sh
# 需要pnpm支持，通过
npm install -g pnpm@7.29.3
# 安装

# 在monorepo根目录执行
pnpm install
# 安装monorepo root依赖

# 然后执行
pnpm --filter @data-farmer/ex-copy-static-asset-with-esbuild install
# 安装ex-copy-static-asset-with-esbuild项目的依赖

# 在monorepo根目录执行
pnpm run ex-copy-static-asset-with-esbuild:build
# 构建js产物

# 继续在monorepo根目录执行
docker build -t ex-copy-static-asset-with-esbuild -f apps/ex-copy-static-asset-with-esbuild/Dockerfile apps/ex-copy-static-asset-with-esbuild
# 构建image镜像
```

获取更多[@data-farmer/ex-copy-static-asset-with-esbuild](./apps/ex-copy-static-asset-with-esbuild/README.md) 的信息
