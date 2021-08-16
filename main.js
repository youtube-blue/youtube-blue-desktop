const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const find = require('find-process');
const unhandled = require('electron-unhandled');
const {openNewGitHubIssue, debugInfo} = require('electron-util');
unhandled()
if (process.platform === "win32"){
  app.setUserTasks([
    {
      //program: __dirname + "/download/wait.bat",
      //program: "node",
      program: __dirname + "/download/download.bat",
      //arguments: __dirname + '/download/download.js',
      arguments: __dirname,
      iconPath: __dirname + '/icons/ytblue.ico',
      iconIndex: 0,
      title: 'Download current video',
      description: 'This button downloads the video you are currently watching'
    },
    {
      //program: "node",
      program: __dirname + '/pip/piprequest.bat',
      //arguments: __dirname + '/pip/piprequest.js',
      arguments: "",
      iconPath: __dirname + '/icons/ytblue.ico',
      iconIndex: 0,
      title: 'Request Picture in Picture (PiP) mode',
      description: 'This button enter Picture in Picture (PiP) mode'
    }
  ])
}
app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: __dirname + '/icons/ytblue.ico',
  })
  async function pipCheck() {
    while (true){
      find('name', 'cmd', true).then(function (list) {
      //find('name', 'node', true).then(function (list) {
        var i;
        for (i = 0; i < list.length; i++) {
          //if (list[i].cmd.includes('piprequest.js')){
          if (list[i].cmd.includes('piprequest.bat')){
            win.webContents.executeJavaScript("document.getElementsByClassName('video-stream html5-main-video')[0].requestPictureInPicture()")
          }
        }
      });
      await new Promise(r => setTimeout(r, 2000)).catch((error) => {console.error(error)});
    }
  }
  pipCheck()
  win.maximize()
  win.setMenuBarVisibility(false)
  win.loadURL('https://www.youtube.com')
  win.webContents.on('did-finish-load', function() {
    fs.readFile(__dirname+'/app/blue.css', "utf-8", function(error, data) {
      if (!error){
        var formattedData = data.replace(/\s{2,10}/g, ' ').trim()
        win.webContents.insertCSS(formattedData)
      }
    })
    fs.readFile(__dirname+'/app/blue.js', "utf-8", function(error, data) {
      if (!error){
        win.webContents.executeJavaScript(data)
      }
    })
  });
  win.webContents.on('did-navigate-in-page', function() {
    let currentURL = win.webContents.getURL();
    console.log(currentURL)
    fs.writeFile(__dirname+'/data/lastURL', currentURL, (err) => {
      if (err) throw err;
    });
  })
})
