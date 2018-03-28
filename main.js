const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

app.commandLine.appendSwitch('disable-web-security');
function createWindow () {
    win = new BrowserWindow(
    {
      'node-integration': 'iframe',
      'web-preferences': {'web-security': false},
      width: 1280,
      height: 700,
      minWidth: 1280,
      minHeight: 720,
      frame: false
    }
)
  win.setMenu(null);
  win.webContents.openDevTools();
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Откроет DevTools.
  //win.webContents.openDevTools()
win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
