# 🗣 banterer

 - lighthearted and, at times, inspiring remarks on software for when you need to break up the monotony


## Install

```
$ npm install banterer
```

## Usage

```js
const banterer = require("banterer");

console.log(banterer.random()); // returns random banter
console.log(banterer.random("react")); // returns random react banter
console.log(banterer.list()); // returns an array of all banter
console.log(banterer.list("react")); // returns an array of all react banter
```

## CLI

```bash
$ banterer [options]
```

### Options

```
-v, --version      output the version number
-l, --list         list all banter
-t, --tag <value>  filter banter with tag
-j, --jokes        return jokes only (WIP)
-q, --quotes       return quotes only (WIP)
-a, --add          interactively add a record (WIP)
-h, --help         output usage information
```

### Examples

```bash
$ banterer
$ banterer --tag react
$ banterer -t javascript
$ banterer --list
$ banterer -l
$ banterer -lt react
```

## Tags
Tags consider a curated list of tags associated with the banter as well as the text of the quote to determine matches.
