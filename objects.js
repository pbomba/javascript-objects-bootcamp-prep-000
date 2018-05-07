var playlist = {
}

var name = "Prints";
var song = "Purple Rain";

function updatePlaylist(playlist, name, song){
  Object.assign(playlist, {name: song})
}