var playlist = {
}

var name = "Prints"
var song = ""

function updatePlaylist(playlist, name, song){
  Object.assign(playlist, {name: song})
}