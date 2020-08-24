import { app, BrowserWindow } from 'electron'
import path from 'path'

app.once('ready', () => {
	const mainWindow = new BrowserWindow()
  mainWindow.loadURL(path.resolve('dist', 'react', 'index.html'))
    .catch(console.error)
})
