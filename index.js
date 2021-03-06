const middle = require('electron-middle')
const pug = require('pug')
const fs = require('fs')
const path = require('path')

middle.get((file, cb) => {
  let ext = path.extname(file);
  if (ext == '.html') {
    let pugfile = file.replace('.html', '.pug')
    fs.access(pugfile, err => {
      if (err) {
        cb()
      } else {
        compilePug(pugfile, cb)
      }
    })
  } else {
    cb()
  }
})

function compilePug(pugfile, cb) {
  fs.readFile(pugfile, (err, data) => {
    if (err) {
      cb()
    } else {
      let fn = pug.compile(data.toString(), {})
      let html = fn({})
      cb(html)
    }
  })
}