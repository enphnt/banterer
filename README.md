# banter

 - lighthearted remarks for when you need to break up the monotony


## Install

```
$ npm install banter
```

## Usage

```js
const banter = require("banter");

console.log(banter.random()); // returns random banter
console.log(banter.random("react")); // returns random react banter
console.log(banter.list()); // returns an array of all banter
console.log(banter.list("react")); // returns an array of all react banter
```

## CLI

```bash
$ banter [options]
```

### Options

```
-v, --version      output the version number
-l, --list         list all the jokes
-t, --tag <value>  filter banter with tag
-j, --jokes        return jokes only (WIP)
-q, --quotes       return quotes only (WIP)
-a, --add          interactively add a record (WIP)
-h, --help         output usage information
```

### Examples

```bash
$ banter
$ banter --tag react
$ banter -t javascript
$ banter --list
$ banter -l
$ banter -lt react
```

## Tags

- javascript
- react
- java
- c#
- node
- coffeescript
- css
- ember
- backbone
- knockout
