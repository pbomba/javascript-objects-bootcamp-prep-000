var playlist = {artistName : songTitle};

var artistName = "Prints";
var songTitle = "Purple Rain";

function updatePlaylist(playlist, name, song){
  Object.assign(playlist, {name: song})
}