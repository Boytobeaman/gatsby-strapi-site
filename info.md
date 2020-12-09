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

#### step of copy website

##### step one, prepare domain and category urls;
you now have a domain; for example: a.com;

you need to think of seo stuffs and get category links like: 
https://www.a.com/cat-one/
https://www.a.com/cat-two/
https://www.a.com/cat-three/

##### step two, generate seometa data and images
generate seometa data to database


// 程序目录learnDoc/node
// 程序位置buildWebsite
and get images based on generated json data;

move the json data(cat-one.json,...) and imagas to /content/a.com/ folder

##### step three, change some seo data
change the old domain( olddomain.com ) to new doman ( a.com );
change menu(/src/utils.js) data base on your url of first step

change category pages folder name according to your url of first step
eg: /src/pages/cat-one/index.js

change backlinks in footer component

##### step four, build website using gatsby



#### latest branch
```
plastic-pallets.cn
```