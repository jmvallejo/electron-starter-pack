import { app, BrowserWindow } from 'electron'
import path from 'path'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const ENTRY_POINT = IS_PRODUCTION ? path.join('dist', 'react', 'index.html') : 'http://localhost:3000'

app.once('ready', () => {
  const mainWindow = new BrowserWindow()
  mainWindow.webContents.openDevTools()
  if (IS_PRODUCTION) {
    mainWindow.loadFile(ENTRY_POINT)
      .catch(console.error)
  } else {
    mainWindow.loadURL(ENTRY_POINT)
      .catch(console.error)
  }
})
