# sqlcipher
> sqlcipher 是一个基于openssl加密功能sqlite3。形式上增加一些与加密功能相关`sql`语句；本质上是一个经过重新编译的sqlite3，不破坏原有功能，仅仅增添了加密特性。

### 简介
SQLCipher是开源SQLite的一个扩展，此处不是作为SQLite插件，而是指扩展其功能，扩展[sqlite API](https://github.com/mapbox/node-sqlite3/wiki/API)，因为SQLCipher需要重新编译SQLite，最终生成一个集成加密功能的`node_sqlit3.node`node文件。SQLCipher对**整个数据库文件加密**。SQLCipher安装不需要复杂的配置环境，一般系统有`npm`就可以针对一些环境进行安装，在过程中会自动安装构建的依赖项。与加密功能的sql语句往往放置最前面，一般是连接数据库之后，就执行这些语句。

### 支持平台 
 * C/C++
 * Obj-C
 * QT
 * Win32/.NET
 * Java
 * Python
 * Ruby
 * Linux
 * Mac OS X
 * iPhone/IOS
 * Android
 * Xamarin.IOS
 * Xamarin.Android
 * Electron



### 用法

```javascript
var SQLite3 = require('sqlcipher').verbose();
var sqlite = new SQLite3('./test-win.db');

sqlite.run("pragma key = 'secret'");
sqlite.run("pragma cipher = 'aes-256-cbc'");//optional, default cipher be eqaul to 'aes-256-cbc'
```
注意：sqlcipher该插件是在sqlite3的基础上增添了加密功能。因此，使用sqlcipher可以对数据库文件进行加密或不加密。如果要对数据库文件进行加密，则连接（创建）数据库文件后，第一条`sql`语句必须是`pragma key = '...'`，否则将会出现意想不到的错误。

### 安装
```bash
npm install sqlcipher 
```
通过运行以上命令，将会根据系统的环境编译出相应（系统下node版本以及node位数）的sqlciher。默认支持以下三种系统环境。

- windows
- mac
- linux

通过携带参数可以在指定环境下进行编译。[特定环境安装](https://github.com/zhouchangsheng/sqlcipher/wiki/%E5%AE%89%E8%A3%85)
```bash
npm install sqlcipher --target=`目标运行环境版本号` --arch=`目标运行环境位数` --dist-url=`目标运行环境地址` --runtime=`目标运行环境`
```


### 加密算法
sqlcipher基于openssl加密库，支持多种加密算法，在实际开发中可以使用默认算法aes-256-cbc或者在[支持的加密算法](https://github.com/zhouchangsheng/sqlcipher/wiki/%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95)中选择其中某一个。
* aes-128-cbc
* aes-192-cfb
* aes-256-cbc(默认)
* cast 
* rc4

### API
sqlcipher 常用api有指定加密秘钥、指定加密算法、更换秘钥等。当然，如果需要改善加密环境下的sqlite性能，有更详细的[api](https://www.zetetic.net/sqlcipher/sqlcipher-api/)（即`sql`语句）去优化项目。

1.加密秘钥
```bash
pragma key = 'secret';
```

2.加密算法

```bash
pragma cipher = 'aes-128-cbc';
```

3.更换秘钥

```bash
pragma rekey = 'aes-128-cbc';
```

