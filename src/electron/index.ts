import { app, BrowserWindow } from 'electron'
import path from 'path'

app.once('ready', () => {
  const mainWindow = new BrowserWindow()
  mainWindow.webContents.openDevTools()
  mainWindow.loadURL('http://localhost:8080')
    .catch(console.error)
})
