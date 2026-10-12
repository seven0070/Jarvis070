const { app, BrowserWindow } = require('electron');
function createWindow(){
  const win = new BrowserWindow({ width: 1200, height: 800, title: 'JARVIS 070 GOD' });
  win.loadFile('src/ui/app.html');
}
app.whenReady().then(createWindow);
