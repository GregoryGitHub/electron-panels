try {
  require("electron-reloader")(module);
} catch (_) {}
const { app, BrowserWindow, Menu, ipcMain } = require("electron");
app.disableHardwareAcceleration();
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    //frame: false, //Remove frame to hide default menu
  });
  // const menu = Menu.buildFromTemplate([
  //   { label: "File", click: () => alert("Navegar para files") },
  //   { label: "Reload", commandId: },
  // ]);
  // Menu.setApplicationMenu(menu);
  //win.loadFile(path.join(__dirname, "pages/home/index.html"));
  win.loadFile("index.html");
  return win;
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
