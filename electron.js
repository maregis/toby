const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    icon: `${__dirname}//public//images//toby.png`,
    backgroundColor: "#000",
	  width: 640,
	  height: 400,
    minWidth: 640,
    minHeight: 400,
    show: false
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.on("did-finish-load", function() {
    mainWindow.show();
    mainWindow.webContents.openDevTools();
  });
  mainWindow.on('closed', function (e) {
    mainWindow = null;
  });
}

app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
