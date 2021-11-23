let msg = "window.innerHeight:"+ window.innerHeight;
msg += "window.innerwidth:"+ window.innerWidth.toString();
msg += "window.location:" + window.location+"<br>"
msg +="window.screen"+window.screen.height;
msg += "window.scroll"+ window.scrollX;
msg += window.history.length;
msg += document.lastModified;




document.getElementById("demo").innerHTML = msg;

let profile = "home commes true".length;

// profile.toLowerCase();
// profile.charAt(12);
document.getElementById("content").innerHTML = profile;
