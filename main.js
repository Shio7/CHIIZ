const { app, BrowserWindow } = require('electron')

function createWindow () {

    const win = new BrowserWindow({ // 브라우저 창을 생성한다.

        width: 800,

        height: 600,

        webPreferences: {

            nodeIntegration: true

        }

    })

    win.loadFile('./src/index.html') // index.html 파일을 불러온다.

}

app.whenReady().then(createWindow) 