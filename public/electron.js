const path = require("path");

const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const isDev = require("electron-is-dev");

// Conditionally include the dev tools installer to load React Dev Tools
let installExtension, REACT_DEVELOPER_TOOLS;

if (isDev) {
  const devTools = require("electron-devtools-installer");
  installExtension = devTools.default;
  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
}

function createWindow(arg) {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webSecurity: false,
    },
  });

  // and load the index.html of the app.
  win.loadURL(
    isDev
      ? `http://localhost:3000/${arg}`
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  // if (isDev) {
  //   win.webContents.openDevTools({ mode: "detach" });
  // }
}

// function createChildWindow(arg) {
//   childWindow = new BrowserWindow({
//     width: 1000,
//     height: 700,
//     modal: true,
//     show: false,
//     parent: app, // Make sure to add parent window here

//     // Make sure to add webPreferences with below configuration
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//       enableRemoteModule: true,
//     },
//   });

//   // Child window loads settings.html file
//   console.log("isDevisDev", isDev);
//   childWindow.loadURL(
//     isDev
//       ? `http://localhost:3000/${arg}`
//       : `file://${path.join(__dirname, "../build/index.html")}`
//   );
//   childWindow.once("ready-to-show", () => {
//     childWindow.show();
//   });
// }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((error) => console.log(`An error occurred: , ${error}`));
  }
});

ipcMain.on("openChildWindow", (event, arg) => {
  // console.log("dvjdbvhjbjhb", arg);
  // console.log("kjdnvsdjkvnjn",BrowserWindow.getFocusedWindow());
  // console.log("kjdnvsdjkvnjn",BrowserWindow.getAllWindows()[0]);
  createWindow(arg);
});

ipcMain.on("getFileName", (event, data) => {
  dialog
    .showOpenDialog({
      properties: [
        "openFile",
        //  'multiSelections'
      ],
      filters: [{ name: "Movies", extensions: ["mkv", "avi", "mp4"] }],
    })
    .then((res) => {
      event.reply("getFileNameReply", res.filePaths[0]);
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

//////////////////////////////

// const { app, BrowserWindow, ipcMain } = require("electron");
// const path = require("path");

// let mainWindow;

// // Function to create independent window or main window
// function createWindow() {
// mainWindow = new BrowserWindow({
// 	width: 800,
// 	height: 600,
// 	// Make sure to add webPreferences with
// 	// nodeIntegration and contextIsolation
// 	webPreferences: {
// 	nodeIntegration: true,
// 	contextIsolation: false,
// 	},
// 	show: false,
// });

// // Main window loads index.html file
// mainWindow.loadFile("index.html");

// // To maximize the window
// mainWindow.maximize();
// mainWindow.show();
// }

// // Function to create child window of parent one
// function createChildWindow() {
// childWindow = new BrowserWindow({
// 	width: 1000,
// 	height: 700,
// 	modal: true,
// 	show: false,
// 	parent: mainWindow, // Make sure to add parent window here

// 	// Make sure to add webPreferences with below configuration
// 	webPreferences: {
// 	nodeIntegration: true,
// 	contextIsolation: false,
// 	enableRemoteModule: true,
// 	},
// });

// // Child window loads settings.html file
// childWindow.loadFile("settings.html");

// childWindow.once("ready-to-show", () => {
// 	childWindow.show();
// });
// }

// ipcMain.on("openChildWindow", (event, arg) => {
// createChildWindow();
// });

// app.whenReady().then(() => {
// createWindow();

// app.on("activate", () => {
// 	if (BrowserWindow.getAllWindows().length === 0) {
// 	createWindow();
// 	}
// });
// });

// app.on("window-all-closed", () => {
// if (process.platform !== "darwin") {
// 	app.quit();
// }
// });
