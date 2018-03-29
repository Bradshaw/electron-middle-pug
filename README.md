# electron-middle-sass

Compile `.pug` files to `.html` as they are requested by your [electron](https://electronjs.org/) app  
[Learn how to write Pug at pugjs.org](https://pugjs.org/api/getting-started.html)

*This project uses [electron-middle](https://www.npmjs.com/package/electron-middle), a middleware for electron*

## Install

Within your project folder, run `npm install electron-middle-pug`

## Usage

Require `electron-middle-pug` in your main electron project script:
```javascript
require('electron-middle-pug')
```

Now, whenever your app attempts to load a `.html` file, `electron-middle-pug` will try to find a `.pug` file to compile and return instead  