const {remote, BrowserWindow} = require('electron');
const $ = require('jquery');

let win = remote.getCurrentWindow();

$(document).ready(function(){
  $('#close-window').click(function() {
    win.close();
  });

  $('#minimize-window').click(function() {
      win.minimize();
  });

  $('#restore-window').click(function(){
      if(!win.isMaximized()) {
          win.maximize();
          return;
      }
      if(win.isMaximized()){
          win.restore();
          return;
      }
  });

  // $('.category-container').focus(function(){
  //   $('.category-icon')
  //   $('.category-title')
  // });
});





