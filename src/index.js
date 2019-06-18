'use strict'

import { app, BrowserWindow } from 'electron'
import devtools from './devtools'

//  console.dir(app)
if (process.env.NODE_ENV === 'development') {
  devtools()
}

app.on('before-quit', () => {
  console.log('saliendo..')
})
app.on('ready', () => {
    let win = new BrowserWindow({
        show: false
    })
win.once('ready-to-show', () => {
        win.show()
    })
win.on('closed', () => {
        win = null
        app.quit()
    })
    win.loadURL(`file://${__dirname}/renderer/index.html`)
    win.toggleDevTools()
})
