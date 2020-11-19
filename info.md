### Mac 下yarn 安装失败
提升信息如下等

```
node_modules/mozjpeg: Command failed


⚠ connect ECONNREFUSED 151.101.0.133:443
  ⚠ mozjpeg pre-build test failed
  ℹ compiling from source
  ✖ Error: Command failed: /bin/sh -c autoreconf -fiv
```

可以执行命令
```
brew install automake autoconf libtool dpkg pkgconfig nasm libpng
```
